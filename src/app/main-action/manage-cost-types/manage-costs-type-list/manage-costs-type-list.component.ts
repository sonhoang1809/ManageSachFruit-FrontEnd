import { MatDialog } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { GeneralHelperService } from './../../../services/general-helper.service';
import { ResponseSearch } from './../../../models/response-search';
import { CostTypeService } from './../CostTypeService/cost-type.service';
import { PageInfo } from './../../../models/page-info';
import { CostType } from './../../../models/cost-details';
import { SearchRequest } from './../../../Requests/search-request';
import { Component, OnInit } from '@angular/core';
import { ManageCostTypeDetailsComponent } from './manage-cost-type-details/manage-cost-type-details.component';

@Component({
  selector: 'app-manage-costs-type-list',
  templateUrl: './manage-costs-type-list.component.html',
  styleUrls: ['./manage-costs-type-list.component.css']
})
export class ManageCostsTypeListComponent implements OnInit {

  searchCostTypeRequest: SearchRequest = {
    limit: 5,
    page: 1,
    search: "",
    sortField: null,
    sortOrder: 0
  };
  costTypeList: CostType[] = null;
  pageInfo: PageInfo = { isFirstPage: true, isLastPage: false, numberOfPage: 1, info: null };

  constructor(private costTypeService: CostTypeService, public generalHelper: GeneralHelperService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.searchCostTypeList();
  }
  showDialogCostType(costType): void {
    const dialogRef = this.dialog.open<ManageCostTypeDetailsComponent>(ManageCostTypeDetailsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      width: '650px',
      data: costType
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        //console.log(result);
        if (result == true) {
          this.searchCostTypeList();
        }
      }
    });
  }
  searchCostTypeList() {
    this.costTypeList = null;
    this.costTypeService.searchCostType(this.searchCostTypeRequest).subscribe(
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
      this.searchCostTypeRequest.page = this.searchCostTypeRequest.page - 1;
      this.searchCostTypeList();
      return;
    }
    this.pageInfo.info = responseData.info;
    //console.log(this.pageInfo);
    this.costTypeList = responseData.data;
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
    this.searchCostTypeRequest.page = page;
    this.searchCostTypeList();
  }
  searchCostTypeSortBy(sort: Sort) {
    if (sort.active != "CostTypeName") {
      return;
    } else {
      switch (sort.direction) {
        case "asc": {
          this.searchCostTypeRequest.sortField = sort.active;
          this.searchCostTypeRequest.sortOrder = 0;
          this.searchCostTypeList();
          break;
        };
        case "desc": {
          this.searchCostTypeRequest.sortField = sort.active;
          this.searchCostTypeRequest.sortOrder = 1;
          this.searchCostTypeList();
          break;
        }
        default: {
          this.searchCostTypeRequest.sortField = null;
          this.searchCostTypeRequest.sortOrder = 0;
          this.searchCostTypeList();
          break;
        }
      }
    }
  }
  
  searchCostTypeByName(search: string) {
    this.searchCostTypeRequest.search = search;
    this.searchCostTypeList();
  }

}
