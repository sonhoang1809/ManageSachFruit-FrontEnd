import { SearchRequest, SearchCostRequest } from './../Requests/search-request';
import { SearchProductRequest } from './../Requests/search-product-request';
import {
  UrlServerAPISummaryRevenueInMonth,
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
  UrlServerAPIProduct,
  UrlServerAPIStatisticsRevenueByCategory,
  UrlServerAPIGetAllUnits,
  UrlServerAPICost,
  UrlServerAPICostType,
  UrlServerAPISearchCostType,
  UrlServerAPIStatisticsCostType,
  UrlGetAllCity,
  UrlGetAllDistrictInCity,
  UrlGetAllWardInDistrict,
  UrlServerAPIOrder,
  UrlServerAPIGetProductsOfCategory,
  UrlServerAPISearchInvest,
  UrlServerAPIInvest
} from './../models/url-api';
import { ResponseServer } from './../models/response-server';

import { SummaryFrame } from './../models/summary-frame';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {


  constructor(private http: HttpClient) { }

  public getSummaryRevenueInMonth(): Observable<ResponseServer> {
    return this.http.get<ResponseServer>(UrlServerAPISummaryRevenueInMonth);
  }

  public getSummaryCostInMonth(): Observable<ResponseServer> {
    return this.http.get<ResponseServer>(UrlServerAPISummaryCostInMonth);
  }

  public getSummaryProfitInMonth(): Observable<ResponseServer> {
    return this.http.get<ResponseServer>(UrlServerAPISummaryProfitInMonth);
  }

  public getSummaryRevenuePerOrderInMonth(): Observable<ResponseServer> {
    return this.http.get<ResponseServer>(UrlServerAPISummaryRevenuePerOrderInMonth);
  }

  public getSummaryNumberNewCustomerInMonth(): Observable<ResponseServer> {
    return this.http.get<ResponseServer>(UrlServerAPISummaryNumberOrderInMonth);
  }

  public getSummaryNumberOrderInMonth(): Observable<ResponseServer> {
    return this.http.get<ResponseServer>(UrlServerAPISummaryNumberOrderInMonth);
  }

  public getSummaryNumberCostInMonth(): Observable<ResponseServer> {
    return this.http.get<ResponseServer>(UrlServerAPISummaryNumberCostInMonth);
  }

  public getSummaryNumberProductInStockInMonth(): Observable<ResponseServer> {
    return this.http.get<ResponseServer>(UrlServerAPISummaryNumberProductInStockInMonth);
  }

  public getRemainMoney(): Observable<ResponseServer> {
    return this.http.get<ResponseServer>(UrlServerAPIGetRemainMoney);
  }

  public searchOrder(searchRequest): Observable<ResponseServer> {
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.post<ResponseServer>(UrlServerAPISearchOrder, searchRequest);
  }

  public storeNewOrder(data): Observable<ResponseServer> {
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.post<ResponseServer>(UrlServerAPIOrder, data);
  }

  public updateOrder(data,id): Observable<ResponseServer> {
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.put<ResponseServer>(UrlServerAPIOrder+'/'+id, data);
  }

  public deleteOrder(id): Observable<ResponseServer> {
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.delete<ResponseServer>(UrlServerAPIOrder + '/' + id);
  }

  public getOrderDetail(id): Observable<ResponseServer> {
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.get<ResponseServer>(UrlServerAPIOrder + '/' + id);
  }

  public getStatisticRevenueCost(statisticBy: number): Observable<ResponseServer> {
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.get<ResponseServer>(UrlServerAPIStatisticsRevenueCost + '/' + statisticBy);
  }

  public getStatisticRevenueByCategory(statisticBy: number): Observable<ResponseServer> {
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.get<ResponseServer>(UrlServerAPIStatisticsRevenueByCategory + '/' + statisticBy);
  }

  public getStatisticCostType(statisticBy: number): Observable<ResponseServer> {
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.get<ResponseServer>(UrlServerAPIStatisticsCostType + '/' + statisticBy);
  }

  public getStatisticProfit(statisticBy: number): Observable<ResponseServer> {
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.get<ResponseServer>(UrlServerAPIStatisticsProfit + '/' + statisticBy);
  }

  public getAllCategories(): Observable<ResponseServer> {
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.get<ResponseServer>(UrlServerAPIGetAllCategory);
  }

  public getAllUnits(): Observable<ResponseServer> {
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.get<ResponseServer>(UrlServerAPIGetAllUnits);
  }

  public storeNewProduct(data): Observable<ResponseServer> {
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.post<ResponseServer>(UrlServerAPIProduct, data);
  }

  public getDetailsProduct(id: string): Observable<ResponseServer> {
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.get<ResponseServer>(UrlServerAPIProduct + '/' + id);
  }

  public updateProduct(data, id: string): Observable<ResponseServer> {
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.put<ResponseServer>(UrlServerAPIProduct + '/' + id, data);
  }

  public deleteProduct(id: string): Observable<ResponseServer> {
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.delete<ResponseServer>(UrlServerAPIProduct + '/' + id);
  }

  public searchProduct(searchRequest: SearchProductRequest): Observable<ResponseServer> {
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.post<ResponseServer>(UrlServerAPISearchProduct, searchRequest);
  }

  public getListProductOfCategory(id: string):Observable<ResponseServer> {
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.get<ResponseServer>(UrlServerAPIGetProductsOfCategory+'/'+id);
  }

  public searchInvest(searchRequest): Observable<ResponseServer> {
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.post<ResponseServer>(UrlServerAPISearchInvest, searchRequest);
  }

  public storeNewInvest(data): Observable<ResponseServer> {
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.post<ResponseServer>(UrlServerAPIInvest, data);
  }

  public updateInvest(data,id): Observable<ResponseServer> {
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.put<ResponseServer>(UrlServerAPIInvest+'/'+id, data);
  }

  public deleteInvest(id): Observable<ResponseServer> {
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.delete<ResponseServer>(UrlServerAPIInvest+'/'+id);
  }

  public searchCost(searchRequest: SearchCostRequest): Observable<ResponseServer> {
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.post<ResponseServer>(UrlServerAPISearchCost, searchRequest);
  }

  public storeNewCost(data): Observable<ResponseServer> {
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.post<ResponseServer>(UrlServerAPICost, data);
  }

  public updateCost(data, id: string): Observable<ResponseServer> {
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.put<ResponseServer>(UrlServerAPICost + '/' + id, data);
  }

  public deleteCost(id: string): Observable<ResponseServer> {
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.delete<ResponseServer>(UrlServerAPICost + '/' + id);
  }

  public getDetailsCost(id: string): Observable<ResponseServer> {
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.get<ResponseServer>(UrlServerAPICost + '/' + id);
  }

  public getAllCostType(): Observable<ResponseServer> {
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.get<ResponseServer>(UrlServerAPICostType);
  }

  public searchCostType(data): Observable<ResponseServer> {
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.post<ResponseServer>(UrlServerAPISearchCostType, data,);
  }

  public searchCostTypeDetails(id: number): Observable<ResponseServer> {
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.get<ResponseServer>(UrlServerAPICostType + '/' + id);
  }

  public getAllCity(): Observable<any> {
    let headers = new HttpHeaders();

    // {
    //   'Access-Control-Allow-Headers': 'Content-Type',
    //   'Access-Control-Allow-Methods':'*',
    //   'Access-Control-Allow-Origin': 'https://thongtindoanhnghiep.co',
    //   'Access-Control-Allow-Credentials': 'true',
    //   'Accept': '*/*',
    //   'Authorization': 'Bearer aaa'
    // }
    return this.http.get<any>(UrlGetAllCity);
  }

  public getAllDistrictInCity(idCity: number) {
    return this.http.get<any>(UrlGetAllDistrictInCity + '/' + idCity + '/district');
  }

  public getAllWardOfDistrict(idDistrict: number) {
    return this.http.get<any>(UrlGetAllWardInDistrict + '/' + idDistrict + '/ward');
  }

  httpOptions: Options = {
    headers: new HttpHeaders(
      {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'Authorization':'Bearer ',
        'Host':'http://localhost:4200/'
      }
    ),
    observe: 'response',
    //params: new HttpParams(),
    //reportProgress: true,
    responseType: 'json',
    //withCredentials: true
  }
}

export interface Options {
  headers?: HttpHeaders | { [header: string]: string | string[] };
  observe?: 'events' | 'response' | 'body';
  params?: HttpParams | { [param: string]: string | string[] };
  reportProgress?: boolean;
  responseType: 'json';
  withCredentials?: boolean;
}
