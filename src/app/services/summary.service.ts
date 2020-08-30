import { SearchProductRequest } from './../Requests/search-product-request';
import { SearchRequest } from '../Requests/search-request';
import { UrlServerAPISummaryRevenueInMonth,
   UrlServerAPISummaryCostInMonth, 
   UrlServerAPISummaryProfitInMonth, 
   UrlServerAPISummaryRevenuePerOrderInMonth, 
   UrlServerAPISummaryNumberOrderInMonth, 
   UrlServerAPISummaryNumberCostInMonth,
   UrlServerAPISearchOrder,
   UrlServerAPISearchCost,
   UrlServerAPISummaryNumberProductInStockInMonth,
   UrlServerAPIGetRemainMoney,
   UrlServerAPIStatisticsRevenueCost,
   UrlServerAPIStatisticsProfit,
   UrlServerAPISearchProduct,
   UrlServerAPIGetAllCategory,
   UrlServerAPIStoreNewProduct,
   UrlServerAPIGetDetailsProduct,
   UrlServerAPIUpdateProduct,
   UrlServerAPIDeleteProduct,
   UrlServerAPIStatisticsRevenueByCategory
  } from './../models/url-api';
import { ResponseServer } from './../models/response-server';

import { SummaryFrame } from './../models/summary-frame';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  
  constructor(private http: HttpClient) {

  }

  public getSummaryRevenueInMonth(): Observable<ResponseServer>{
    return this.http.get<ResponseServer>(UrlServerAPISummaryRevenueInMonth);
  }

  public getSummaryCostInMonth(): Observable<ResponseServer>{
    return this.http.get<ResponseServer>(UrlServerAPISummaryCostInMonth);
  }

  public getSummaryProfitInMonth(): Observable<ResponseServer>{
    return this.http.get<ResponseServer>(UrlServerAPISummaryProfitInMonth);
  }

  public getSummaryRevenuePerOrderInMonth(): Observable<ResponseServer>{
    return this.http.get<ResponseServer>(UrlServerAPISummaryRevenuePerOrderInMonth);
  }

  public getSummaryNumberNewCustomerInMonth(): Observable<ResponseServer>{
    return this.http.get<ResponseServer>(UrlServerAPISummaryNumberOrderInMonth);
  }

  public getSummaryNumberOrderInMonth(): Observable<ResponseServer>{
    return this.http.get<ResponseServer>(UrlServerAPISummaryNumberOrderInMonth);
  }

  public getSummaryNumberCostInMonth(): Observable<ResponseServer>{
    return this.http.get<ResponseServer>(UrlServerAPISummaryNumberCostInMonth);
  }

  public getSummaryNumberProductInStockInMonth(): Observable<ResponseServer>{
    return this.http.get<ResponseServer>(UrlServerAPISummaryNumberProductInStockInMonth);
  }

  public getRemainMoney(): Observable<ResponseServer>{
    return this.http.get<ResponseServer>(UrlServerAPIGetRemainMoney);
  }

  public searchOrder(searchRequest: SearchRequest): Observable<ResponseServer>{
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.post<ResponseServer>(UrlServerAPISearchOrder, searchRequest);
  }

  public searchCost(searchRequest: SearchRequest): Observable<ResponseServer>{
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.post<ResponseServer>(UrlServerAPISearchCost, searchRequest);
  }

  public searchProduct(searchRequest: SearchProductRequest): Observable<ResponseServer>{
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.post<ResponseServer>(UrlServerAPISearchProduct, searchRequest);
  }

  public getStatisticRevenueCost(statisticBy: number): Observable<ResponseServer>{
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.get<ResponseServer>(UrlServerAPIStatisticsRevenueCost+'/' + statisticBy);
  }

  public getStatisticRevenueByCategory(statisticBy: number): Observable<ResponseServer>{
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.get<ResponseServer>(UrlServerAPIStatisticsRevenueByCategory+'/' + statisticBy);
  }

  public getStatisticProfit(statisticBy: number): Observable<ResponseServer>{
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.get<ResponseServer>(UrlServerAPIStatisticsProfit+'/' + statisticBy);
  }

  public getAllCategories(): Observable<ResponseServer>{
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.get<ResponseServer>(UrlServerAPIGetAllCategory);
  }

  public storeNewProduct(data): Observable<ResponseServer>{
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.post<ResponseServer>(UrlServerAPIStoreNewProduct, data);
  }

  public getDetailsProduct(id: string): Observable<ResponseServer>{
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.get<ResponseServer>(UrlServerAPIGetDetailsProduct+'/'+id);
  }

  public updateProduct(data, id: string): Observable<ResponseServer>{
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.put<ResponseServer>(UrlServerAPIUpdateProduct+'/'+id, data);
  }

  public deleteProduct(id: string): Observable<ResponseServer>{
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.delete<ResponseServer>(UrlServerAPIDeleteProduct+'/'+id);
  }
}
