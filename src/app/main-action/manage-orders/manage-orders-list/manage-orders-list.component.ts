import { VerifyActionComponent } from './../../verify-action/verify-action.component';
import { Sort } from '@angular/material/sort';
import { GeneralHelperService } from './../../../services/general-helper.service';
import { OrderService } from './../OrderServices/order.service';
import { SummaryService } from './../../../services/summary.service';
import { MatDialog } from '@angular/material/dialog';
import { PageInfo } from './../../../models/page-info';
import { Order } from './../../../models/order-details';
import { ResponseSearch } from './../../../models/response-search';
import { SearchOrderRequest } from './../../../Requests/search-request';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-orders-list',
  templateUrl: './manage-orders-list.component.html',
  styleUrls: ['./manage-orders-list.component.css']
})
export class ManageOrdersListComponent implements OnInit {

  searchOrderRequest: SearchOrderRequest = {
    limit: 5,
    page: 1,
    search: "",
    sortField: "create_at",
    sortOrder: 0,
    address: null,
    phone: null
  };
  searchResult: ResponseSearch = null;
  orderList: Order[] = null;
  pageInfo: PageInfo = { isFirstPage: true, isLastPage: false, numberOfPage: 1, info: null };

  constructor(private dialog: MatDialog, private orderService: OrderService,
    public generalHelper: GeneralHelperService) { }

  ngOnInit(): void {
    this.searchOrderList();
  }
  searchOrderList() {
    this.orderList = null;
    this.orderService.searchOrder(this.searchOrderRequest).subscribe(
      (response) => {
        this.getData(response.data);
      },
      (error) => {
        this.generalHelper.handleError(error);
      }
    );
  }
  getData(responseData: ResponseSearch) {
    //console.log(this.productList);
    if (responseData.data.length == 0 && responseData.info.page > 1) {
      this.searchOrderRequest.page = this.searchOrderRequest.page - 1;
      this.searchOrderList();
      return;
    }
    this.pageInfo.info = responseData.info;
    //console.log(this.pageInfo);
    this.orderList = responseData.data;
    //console.log(this.productList);
    this.pageInfo.numberOfPage = Math.ceil(this.pageInfo.info.totalRecord / this.pageInfo.info.limit);
    if (this.pageInfo.info.page == 1) {
      this.pageInfo.isFirstPage = true;
    } else {
      this.pageInfo.isFirstPage = false;
    }
    if (this.pageInfo.info.page == this.pageInfo.numberOfPage) {
      this.pageInfo.isLastPage = true;
    } else {
      this.pageInfo.isLastPage = false;
    }
  }

  searchOrderByPage(page: number) {
    this.searchOrderRequest.page = page;
    this.searchOrderList();
  }
  searchOrderSortBy(sort: Sort) {
    if (sort.active != "customer_name"
      && sort.active != "address"
      && sort.active != "phone"
      && sort.active != "total"
      && sort.active != "create_at") {
      return;
    } else {
      switch (sort.direction) {
        case "asc": {
          this.searchOrderRequest.sortField = sort.active;
          this.searchOrderRequest.sortOrder = 0;
          this.searchOrderList();
          break;
        };
        case "desc": {
          this.searchOrderRequest.sortField = sort.active;
          this.searchOrderRequest.sortOrder = 1;
          this.searchOrderList();
          break;
        }
        default: {
          this.searchOrderRequest.sortField = "create_at";
          this.searchOrderRequest.sortOrder = 0;
          this.searchOrderList();
          break;
        }
      }
    }
  }
  searchOrderByCustomerName(data){
    this.searchOrderRequest.search = data;
    this.searchOrderList();
  }
  searchOrderByPhone(data){
    this.searchOrderRequest.phone = data;
    this.searchOrderList();
  }
  searchOrderBySpecificAddress(data){
    this.searchOrderRequest.address = data;
    this.searchOrderList();
  }
  searchOrderByFilter(searchOrderRequest){
    this.searchOrderRequest = searchOrderRequest;
    //console.log(searchOrderRequest);
    this.searchOrderList();
  }
  deleteOrder(order: Order) {
    let dialogRef = this.dialog.open(VerifyActionComponent, {
      panelClass: 'myapp-no-padding-dialog',
      width: '300px',
      height: '180px',
      data: { title: 'Xác nhận', message: 'Bạn có chắc muốn xóa order này ?'}
    });
    dialogRef.afterClosed().subscribe(result => {
      //console.log(result);
      if (result == true) {
        this.generalHelper.openWaitingPopup();
        this.orderService.deleteOrder(order.id).subscribe(
          (response) => {
            this.generalHelper.closeWaitingPopup();
            this.generalHelper.handleMessage("Success", response.message);
            this.searchOrderList();
            dialogRef.close();
          },
          (error) => {
            this.generalHelper.closeWaitingPopup();
            this.generalHelper.handleError(error);
            dialogRef.close();
          }
        );
      }
    });
  }

}
