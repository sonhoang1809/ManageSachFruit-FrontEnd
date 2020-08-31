import { SearchProductRequest } from './../../Requests/search-product-request';
import { SummaryService } from './../../services/summary.service';
import { Product, ProductDetails } from './../../models/product';
import { ResponseSearch } from './../../models/response-search';
import { PageInfo } from './../../models/page-info';

import { MessageComponent } from './../../message/message.component';

import { ProductsService } from './ProductServices/products.service';

import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { ManageProductsListComponent } from './manage-products-list/manage-products-list.component';


@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})

export class ManageProductsComponent implements OnInit  {

  titleComponent: string = 'Quản lý danh sách sản phẩm';

 // pageInfo: PageInfo = { isFirstPage: true, isLastPage: false, numberOfPage: 1, info: null };
  pageInfo: PageInfo = null;
  
  searchProductRequest: SearchProductRequest= {
    limit: 5,
    page: 1,
    search:"",
    sortField: "create_at",
    sortOrder: 0,
    categoryIds: null,
    units: null
  };
  
  productList: Product[] = [];

  constructor(private dialog: MatDialog, private productService: ProductsService) {
    //this.productService.getProductList();
    //this.productList = this.productService.productList;
    //this.pageInfo = this.productService.getPageInfo();
    //this.productList = this.productService.getProductList();
    //console.log(this.productList);
    //console.log(this.pageInfo);
  }

  ngOnInit(): void {
    //this.searchProduct(1);
    
  }

  handleError(error) {
    this.dialog.open(MessageComponent,{
      panelClass: 'myapp-no-padding-dialog',
        position: {
          bottom: '50px',
          right: ' 50px'
        },
        data: error
    });
  }

  getData(responseData) {
    //this.productList = [];
    this.pageInfo.info = responseData.info;
    this.productList = responseData.data;
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

  searchProduct(page: number){
    //this.searchProductRequest.page= page;
    this.productService.searchProductByPage(page); 
  }



}
