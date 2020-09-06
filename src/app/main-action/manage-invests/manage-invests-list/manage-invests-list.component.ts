import { VerifyActionComponent } from './../../verify-action/verify-action.component';
import { ManageInvestDetailsComponent } from './manage-invest-details/manage-invest-details.component';
import { Sort } from '@angular/material/sort';
import { ResponseSearch } from './../../../models/response-search';
import { MatDialog } from '@angular/material/dialog';
import { GeneralHelperService } from './../../../services/general-helper.service';
import { InvestService } from './../InvestService/invest.service';
import { PageInfo } from './../../../models/page-info';
import { Invest } from './../../../models/invest';
import { SearchRequest } from './../../../Requests/search-request';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-invests-list',
  templateUrl: './manage-invests-list.component.html',
  styleUrls: ['./manage-invests-list.component.css']
})
export class ManageInvestsListComponent implements OnInit {

  searchInvestRequest: SearchRequest = {
    limit: 5,
    page: 1,
    search: "",
    sortField: "create_at",
    sortOrder: 1
  };
  investList: Invest[] = null;
  pageInfo: PageInfo = { isFirstPage: true, isLastPage: false, numberOfPage: 1, info: null };
  constructor(private investService: InvestService, public generalHelper: GeneralHelperService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.searchList();
  }
  searchList() {
    this.investList = null;
    this.investService.searchInvest(this.searchInvestRequest).subscribe(
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
      this.searchInvestRequest.page = this.searchInvestRequest.page - 1;
      this.searchList();
      return;
    }
    this.pageInfo.info = responseData.info;
    //console.log(this.pageInfo);
    this.investList = responseData.data;
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
  searchByPage(page: number) {
    this.searchInvestRequest.page = page;
    this.searchList();
  }
  searchSortBy(sort: Sort) {
    if (sort.active != "invest_description" && sort.active != "create_at" && sort.active != "invest_total") {
      return;
    } else {
      switch (sort.direction) {
        case "asc": {
          this.searchInvestRequest.sortField = sort.active;
          this.searchInvestRequest.sortOrder = 0;
          this.searchList();
          break;
        }
        case "desc": {
          this.searchInvestRequest.sortField = sort.active;
          this.searchInvestRequest.sortOrder = 1;
          this.searchList();
          break;
        }
        default: {
          this.searchInvestRequest.sortField = "create_at";
          this.searchInvestRequest.sortOrder = 0;
          this.searchList();
          break;
        }
      }
    }
  }

  searchInvestByDescription(search: string) {
    this.searchInvestRequest.search = search;
    this.searchList();
  }

  showDialogInvest(invest): void {
    const dialogRef = this.dialog.open<ManageInvestDetailsComponent>(ManageInvestDetailsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      width: '650px',
      data: invest
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        //console.log(result);
        if (result == true) {
          this.searchList();
        }
      }
    });
  }
  deleteInvest(invest: Invest){
    let dialogRef = this.dialog.open(VerifyActionComponent, {
      panelClass: 'myapp-no-padding-dialog',
      width: '300px',
      height: '180px',
      data: { title: 'Xác nhận', message: 'Bạn có chắc muốn xóa: ' + invest.description }
    });
    dialogRef.afterClosed().subscribe(result => {
      //console.log(result);
      if (result == true) {
        this.generalHelper.openWaitingPopup();
        this.investService.deleteInvest(invest.id).subscribe(
          (response) => {
            this.generalHelper.closeWaitingPopup();
            this.generalHelper.handleMessage("Success", response.message);
            this.searchList();
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
