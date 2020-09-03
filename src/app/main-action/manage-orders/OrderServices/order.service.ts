import { SearchOrderRequest } from './../../../Requests/search-request';
import { SummaryService } from './../../../services/summary.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private service: SummaryService) { }
  searchOrder(searchRequest: SearchOrderRequest){
    return this.service.searchOrder(searchRequest);
  }
  getOrderDetails(id: string){
    return this.service.getOrderDetail(id);
  }
  deleteOrder(id: string){
    return this.service.deleteOrder(id);
  }
  getAllCity(){
    return this.service.getAllCity();
  }
  getAllDistrictInCity(idCity: number){
    return this.service.getAllDistrictInCity(idCity);
  }
  getAllWardInDistrict(idDistrict: number){
    return this.service.getAllWardOfDistrict(idDistrict);
  }
}
