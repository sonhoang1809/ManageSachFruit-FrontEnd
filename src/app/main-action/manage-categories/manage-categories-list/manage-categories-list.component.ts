import { VerifyActionComponent } from './../../verify-action/verify-action.component';
import { ManageCategoryDetailsComponent } from './manage-category-details/manage-category-details.component';
import { Sort } from '@angular/material/sort';
import { GeneralHelperService } from './../../../services/general-helper.service';
import { CategoriesService } from './../CategoryService/categories.service';
import { MatDialog } from '@angular/material/dialog';
import { PageInfo } from './../../../models/page-info';
import { Category } from './../../../models/category';
import { ResponseSearch } from './../../../models/response-search';
import { SearchRequest } from './../../../Requests/search-request';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-categories-list',
  templateUrl: './manage-categories-list.component.html',
  styleUrls: ['./manage-categories-list.component.css']
})
export class ManageCategoriesListComponent implements OnInit {

  searchCostRequest: SearchRequest = {
    limit: 5,
    page: 1,
    search: "",
    sortField: "create_at",
    sortOrder: 0
  };
  searchResult: ResponseSearch = null;
  categoryList: Category[] = null;
  pageInfo: PageInfo = { isFirstPage: true, isLastPage: false, numberOfPage: 1, info: null };
  constructor(private dialog: MatDialog, private categoriesService: CategoriesService, public generalHelper: GeneralHelperService) { }

  ngOnInit(): void {
    this.searchCategoryList();
  }
  searchCategoryList() {
    this.categoryList = null;
    this.categoriesService.searchCategories(this.searchCostRequest).subscribe(
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
      this.searchCategoryList();
      return;
    }
    this.pageInfo.info = responseData.info;
    //console.log(this.pageInfo);
    this.categoryList = responseData.data;
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
    this.searchCategoryList();
  }
  searchCategorySortBy(sort: Sort) {
    if (sort.active != "cost_description"
      && sort.active != "total"
      && sort.active != "create_at") {
      return;
    } else {
      switch (sort.direction) {
        case "asc": {
          this.searchCostRequest.sortField = sort.active;
          this.searchCostRequest.sortOrder = 0;
          break;
        };
        case "desc": {
          this.searchCostRequest.sortField = sort.active;
          this.searchCostRequest.sortOrder = 1;
          break;
        }
        default: {
          this.searchCostRequest.sortField = "create_at";
          this.searchCostRequest.sortOrder = 0;
          break;
        }
      }
    }
    this.searchCategoryList();
  }
  searchCategoryByName(search: string) {
    this.searchCostRequest.search = search;
    this.searchCategoryList();
  }
  showDialogCategory(category): void {
    const dialogRef = this.dialog.open<ManageCategoryDetailsComponent>(ManageCategoryDetailsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      width: '650px',
      data: category
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        //console.log(result);
        if (result == true) {
          this.searchCategoryList();
        }
      }
    });
  }
  deleteCategory(category: Category) {
    let dialogRef = this.dialog.open(VerifyActionComponent, {
      panelClass: 'myapp-no-padding-dialog',
      width: '300px',
      height: '180px',
      data: { title: 'Xác nhận', message: 'Bạn có chắc muốn xóa: ' + category.categoryName }
    });
    dialogRef.afterClosed().subscribe(result => {
      //console.log(result);
      if (result == true) {
        this.generalHelper.openWaitingPopup();
        this.categoriesService.deleteCategory(category.id).subscribe(
          (response) => {
            this.generalHelper.closeWaitingPopup();
            this.generalHelper.handleMessage("Success", response.message);
            this.searchCategoryList();
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
