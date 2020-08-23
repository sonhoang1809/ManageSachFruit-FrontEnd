
import { SearchOrdersRequest } from './../Requests/search-orders-request';
import { UrlServerAPISearchOrder } from './../models/url-api';

import { ResponseServer } from './../models/response-server';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RecentOrderService {

  constructor(private http: HttpClient) { }

  searchOrder(searchRequest: SearchOrdersRequest): Observable<ResponseServer>{
    
    const headers = { 'Authorization': 'Bearer my-token' };

    return this.http.post<ResponseServer>(UrlServerAPISearchOrder, searchRequest);
  }

}
