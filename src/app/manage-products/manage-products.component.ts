import { PageInfo } from './../models/page-info';
import { ResponseSearch } from './../models/response-search';
import { Product } from './../models/product';
import { SummaryService } from './../services/summary.service';
import { SearchProductRequest } from './../Requests/search-product-request';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  titleComponent: string = 'Quản lý danh sách sản phẩm';


  searchProductRequest: SearchProductRequest;
  searchResult: ResponseSearch = null;
  pageInfo: PageInfo;
  productList: Product[];

  constructor(private service: SummaryService) { }

  

  ngOnInit(): void {
    this.pageInfo = {isFirstPage: true, isLastPage: false, numberOfPage: 1};
    
    this.searchProductRequest= {
      limit: 20,
      page: 1,
      search:"",
      sortField: "create_at",
      sortOrder: 1,
      category: ""
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
