import { SearchRequest } from './../Requests/search-orders-request';
import { UrlServerAPISummaryRevenueInMonth,
   UrlServerAPISummaryCostInMonth, 
   UrlServerAPISummaryProfitInMonth, 
   UrlServerAPISummaryRevenuePerOrderInMonth, 
   UrlServerAPISummaryNumberOrderInMonth, 
   UrlServerAPISummaryNumberCostInMonth,
   UrlServerAPISearchOrder,
   UrlServerAPISearchCost
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

  public searchOrder(searchRequest: SearchRequest): Observable<ResponseServer>{
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.post<ResponseServer>(UrlServerAPISearchOrder, searchRequest);
  }

  public searchCost(searchRequest: SearchRequest): Observable<ResponseServer>{
    const headers = { 'Authorization': 'Bearer my-token' };
    return this.http.post<ResponseServer>(UrlServerAPISearchCost, searchRequest);
  }

}
