
import { Component, OnInit, ViewChild, AfterViewInit, Injectable } from '@angular/core';
import { LoginComponent } from './../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { ManageProductsListComponent } from './manage-products-list/manage-products-list.component';
import { PageInfo } from './../models/page-info';
import { ResponseSearch } from './../models/response-search';
import { Product, ProductDetails } from './../models/product';
import { SummaryService } from './../services/summary.service';
import { SearchProductRequest } from './../Requests/search-product-request';


@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
@Injectable()
export class ManageProductsComponent implements OnInit  {

  titleComponent: string = 'Quản lý danh sách sản phẩm';


  searchProductRequest: SearchProductRequest;
  searchResult: ResponseSearch = null;
  pageInfo: PageInfo;
  productList: ProductDetails[];

  selectProduct: ProductDetails = null;

  constructor(private service: SummaryService, private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.pageInfo = {isFirstPage: true, isLastPage: false, numberOfPage: 1};
    
    this.searchProductRequest= {
      limit: 10,
      page: 1,
      search:"",
      sortField: "create_at",
      sortOrder: 1,
      categoryId: null,
      unit: null
    };
    this.service.searchProduct(this.searchProductRequest).subscribe(response=>{
      this.getData(response.data);
    });
    
  }

  getData(responseData){
    this.productList = [];
    this.searchResult = {
      data: responseData.data,
      info: responseData.info
    };

    for(var prod of this.searchResult.data){
      this.productList.push(prod);
    }

    this.pageInfo.numberOfPage = Math.ceil(this.searchResult.info.totalRecord / this.searchResult.info.limit);

    if(this.searchResult.info.page == 1){
      this.pageInfo.isFirstPage = true;
    }else{
      this.pageInfo.isFirstPage = false;
    }
    if(this.searchResult.info.page == this.pageInfo.numberOfPage){
      this.pageInfo.isLastPage = true;
    }else{
      this.pageInfo.isLastPage = false;
    }

  }

  searchProduct(page: number){
    this.searchProductRequest.page = page;
    this.service.searchProduct(this.searchProductRequest).subscribe(response=>{
      this.getData(response.data);
    });

  }

}
