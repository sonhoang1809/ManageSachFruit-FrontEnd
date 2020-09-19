import { DateTime } from './../../../models/date-time';
import { VerifyActionComponent } from './../../verify-action/verify-action.component';
import { ManageCostDetailsComponent } from './manage-cost-details/manage-cost-details.component';
import { MatDialog } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { ResponseSearch } from './../../../models/response-search';
import { PageInfo } from './../../../models/page-info';
import { GeneralHelperService } from './../../../services/general-helper.service';
import { SearchCostRequest } from './../../../Requests/search-request';
import { CostsService } from './../CostServices/costs.service';
import { Cost } from './../../../models/cost-details';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-costs-list',
  templateUrl: './manage-costs-list.component.html',
  styleUrls: ['./manage-costs-list.component.css']
})
export class ManageCostsListComponent implements OnInit {

  searchCostRequest: SearchCostRequest = {
    limit: 5,
    page: 1,
    search: "",
    sortField: "create_at",
    sortOrder: 0,
    costTypeIds: null
  };
  searchResult: ResponseSearch = null;
  costList: Cost[] = null;
  pageInfo: PageInfo = { isFirstPage: true, isLastPage: false, numberOfPage: 1, info: null };
  constructor(private dialog: MatDialog, private costService: CostsService, private generalHelper: GeneralHelperService) { }

  ngOnInit(): void {
    this.searchCostList();
  }
  getToStringTime(time: DateTime) {
    return this.generalHelper.getToStringTime(time);
  }
  searchCostList() {
    this.costList = null;
    this.costService.searchCost(this.searchCostRequest).subscribe(
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
      this.searchCostRequest.page = this.searchCostRequest.page - 1;
      this.searchCostList();
      return;
    }
    this.pageInfo.info = responseData.info;
    //console.log(this.pageInfo);
    this.costList = responseData.data;
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
    this.searchCostRequest.page = page;
    this.searchCostList();
  }
  searchCostSortBy(sort: Sort) {
    if (sort.active != "cost_description"
      && sort.active != "total"
      && sort.active != "create_at") {
      return;
    } else {
      switch (sort.direction) {
        case "asc": {
          this.searchCostRequest.sortField = sort.active;
          this.searchCostRequest.sortOrder = 0;
          this.searchCostList();
          break;
        };
        case "desc": {
          this.searchCostRequest.sortField = sort.active;
          this.searchCostRequest.sortOrder = 1;
          this.searchCostList();
          break;
        }
        default: {
          this.searchCostRequest.sortField = "create_at";
          this.searchCostRequest.sortOrder = 0;
          this.searchCostList();
          break;
        }
      }
    }

  }
  searchCostByDescription(search: string) {
    this.searchCostRequest.search = search;
    this.searchCostList();
  }
  searchCostByCostType(costTypeIds: string[]) {
    if (costTypeIds == null || costTypeIds.length == 0) {
      this.searchCostRequest.costTypeIds = null;
    } else {
      this.searchCostRequest.costTypeIds = costTypeIds;
    }
    this.searchCostList();
    //console.log(categoryIds);
  }
  showDialogCost(cost): void {
    const dialogRef = this.dialog.open<ManageCostDetailsComponent>(ManageCostDetailsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      width: '650px',
      data: cost
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        //console.log(result);
        if (result == true) {
          this.searchCostList();
        }
      }
    });
  }
  deleteCost(cost: Cost) {
    let dialogRef = this.dialog.open(VerifyActionComponent, {
      panelClass: 'myapp-no-padding-dialog',
      width: '300px',
      height: '180px',
      data: { title: 'Xác nhận', message: 'Bạn có chắc muốn xóa: ' + cost.costDescription }
    });
    dialogRef.afterClosed().subscribe(result => {
      //console.log(result);
      if (result == true) {
        this.generalHelper.openWaitingPopup();
        this.costService.deleteCost(cost.id).subscribe(
          (response) => {
            this.generalHelper.closeWaitingPopup();
            this.generalHelper.handleMessage("Success", response.message);
            this.searchCostList();
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
