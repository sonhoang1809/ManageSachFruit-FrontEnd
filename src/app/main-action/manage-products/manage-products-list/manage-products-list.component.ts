import { ProductDetailsComponent } from './product-details/product-details.component';

import { FormBuilder } from '@angular/forms';
import { ResponseSearch } from './../../../models/response-search';
import { PageInfo } from './../../../models/page-info';
import { SummaryService } from './../../../services/summary.service';
import { SearchProductRequest } from './../../../Requests/search-product-request';
import { ProductDetails, Product } from './../../../models/product';
import { GeneralHelperService } from './../../../services/general-helper.service';

import { VerifyActionComponent } from './../../verify-action/verify-action.component';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { ProductsService } from './../products.service';
import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, Injectable } from '@angular/core';


import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';


@Component({
  selector: 'app-manage-products-list',
  templateUrl: './manage-products-list.component.html',
  styleUrls: ['./manage-products-list.component.css']
})

export class ManageProductsListComponent implements OnInit {

  //displayedColumns: string[] = ['Vi tri', 'name', 'weight', 'symbol'];
  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  //index: number;
  searchProductRequest: SearchProductRequest = {
    limit: 5,
    page: 1,
    search: "",
    sortField: "create_at",
    sortOrder: 0,
    categoryId: null,
    unit: null
  };
  searchResult: ResponseSearch = null;
  productList: Product[] = null;
  pageInfo: PageInfo = { isFirstPage: true, isLastPage: false, numberOfPage: 1, info: null };

  //dataSource= null;

  //@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor(private dialog: MatDialog, private service: SummaryService, public productService: ProductsService,
    private generalHelper: GeneralHelperService, private formBuilder: FormBuilder) {
    //this.dataSource = new MatTableDataSource<Product>(this.productService.getProductList());
    //this.index = this.productService.getPageInfo().info.page * this.productService.getPageInfo().info.limit;
  }
  ngOnInit(): void {
    //this.dataSource.paginator = this.paginator;
    this.searchProductList();
  }
  searchProductList() {
    this.productList = null;
    this.productService.searchProductList(this.searchProductRequest).subscribe(
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
      this.searchProductRequest.page = this.searchProductRequest.page - 1;
      this.searchProductList();
      return;
    }
    this.pageInfo.info = responseData.info;
    //console.log(this.pageInfo);
    this.productList = responseData.data;
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
  searchProductByPage(page: number) {
    this.searchProductRequest.page = page;
    this.searchProductList();
  }
  searchProductSortBy(sort: Sort) {
    if (sort.active != "product_name"
      && sort.active != "description"
      && sort.active != "quantity_in_stock"
      && sort.active != "unit"
      && sort.active != "unit_price") {
      return;
    } else {
      switch (sort.direction) {
        case "asc": {
          this.searchProductRequest.sortField = sort.active;
          this.searchProductRequest.sortOrder = 0;
          this.searchProductList();
          break;
        };
        case "desc": {
          this.searchProductRequest.sortField = sort.active;
          this.searchProductRequest.sortOrder = 1;
          this.searchProductList();
          break;
        }
        default: {
          this.searchProductRequest.sortField = "create_at";
          this.searchProductRequest.sortOrder = 0;
          this.searchProductList();
          break;
        }
      }
    }

  }

  showDialogProduct(product): void {
    const dialogRef = this.dialog.open<ProductDetailsComponent>(ProductDetailsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      width: '650px',
      data: product
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result!=null){
        console.log(result);
        if (result == true) {
          this.searchProductList();
        }
      }
      

    });
  }

  deleteProduct(prod: Product) {
    let dialogRef = this.dialog.open(VerifyActionComponent, {
      panelClass: 'myapp-no-padding-dialog',
      width: '300px',
      height: '180px',
      data: { title: 'Xác nhận', message: 'Bạn có chắc muốn xóa sản phẩm: ' + prod.productName }
    });
    dialogRef.afterClosed().subscribe(result => {
      //console.log(result);
      if (result == true) {
        this.productService.deleteProduct(prod.id).subscribe(
          (response) => {
            this.generalHelper.handleMessage("Success", response.message);
            this.searchProductList();
            dialogRef.close();
          },
          (error) => {
            this.generalHelper.handleError(error);
            dialogRef.close();
          }
        );
      }
    });
  }




}
