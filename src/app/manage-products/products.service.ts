import { Category } from 'src/app/models/category';
import { catchError, retry } from 'rxjs/operators';
import { MessageComponent } from './../message/message.component';
import { MatDialog } from '@angular/material/dialog';
import { ResponseSearch } from './../models/response-search';
import { SearchProductRequest } from './../Requests/search-product-request';
import { ProductDetails, Product } from './../models/product';
import { SummaryService } from './../services/summary.service';
import { Injectable, OnInit } from '@angular/core';
import { PageInfo } from '../models/page-info';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

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
  detailsProduct: ProductDetails;
  public pageInfo: PageInfo = { isFirstPage: true, isLastPage: false, numberOfPage: 1, info: null };
  public productList: Product[] = null;
  public categoryList: Category[] = [];

  constructor(private service: SummaryService, private dialog: MatDialog) {
    
    // this.service.searchProduct(this.searchProductRequest).subscribe(response=>{
    //   console.log("On init");
    //   this.getData(response.data);
    // });
    if(this.productList == null || this.productList.length==0){
      //console.log("Go search");
      this.searchProduct(this.searchProductRequest);
      //console.log(this.productList);
    }

    this.service.getAllCategories().subscribe(response=>{
      this.categoryList = response.data;
    });
  }
  addProduct(prod: Product){
    if (this.pageInfo.isLastPage && this.productList.length < 5) {
      this.productList.push(prod);
    } 
  }

  updateProductInList(prod: Product){
    for(var i = 0; i < this.productList.length;i++){
      if(this.productList[i].id == prod.id){
        this.productList[i] = prod;
      }
    }
  }
  deleteProductInlist(prod:Product){
    if(this.pageInfo.isLastPage){
      for(var i = 0; i < this.productList.length;i++){
        if(this.productList[i].id == prod.id){
          this.productList.slice(i,1);
        }
      }
    }
  }
  getData(responseData: ResponseSearch) {
    this.pageInfo.info = responseData.info;
    console.log(this.pageInfo);
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

  getProductList() {
    return this.productList;
  }
  getCategories(){
    return this.categoryList;
  }
  handleMessage(message){
    this.dialog.open(MessageComponent,{
      panelClass: 'myapp-no-padding-dialog',
      position: {
        bottom: '50px',
        right: ' 50px'
      },
      data: message
    });
  }

  handleError(error){
    this.dialog.open(MessageComponent,{
      panelClass: 'myapp-no-padding-dialog',
      position: {
        bottom: '50px',
        right: ' 50px'
      },
      data: error
    })
  }

  getPageInfo(): PageInfo {
    return this.pageInfo;
  }

  searchProductOrderBy(sortField: string, sortOrder: number){
    // var searchProductRequest: SearchProductRequest = {
    //   limit: this.searchProductRequest.limit,
    //   page: this.searchProductRequest.page,
    //   search: this.searchProductRequest.search,
    //   sortField: sortField,
    //   sortOrder: sortOrder,
    //   categoryId: this.searchProductRequest.categoryId,
    //   unit: this.searchProductRequest.unit
    // };
    this.searchProductRequest.sortField = sortField;
    this.searchProductRequest.sortOrder = sortOrder;
    this.searchProduct(this.searchProductRequest);
  }

  searchProductByPage(page: number){
    this.searchProductRequest.page = page;
    this.searchProduct(this.searchProductRequest);
  }

  searchProduct(searchProductRequest: SearchProductRequest) {
    this.productList = null;
    if(searchProductRequest!=null){
      this.searchProductRequest = searchProductRequest;
    }
    console.log(this.searchProductRequest);
    return this.service.searchProduct(this.searchProductRequest).subscribe(response=>{
      this.getData(response.data);
    });
  }


  getAllCategories() {
    return this.service.getAllCategories();
  }
  getDetailsProduct(id: string) {
    return this.service.getDetailsProduct(id);
  }
  storeNewProduct(data) {
    return this.service.storeNewProduct(data);
  }
  updateProduct(data,id: string){
    return this.service.updateProduct(data,id);
  }
  deleteProduct(id: string){
    return this.service.deleteProduct(id);
  }

}
