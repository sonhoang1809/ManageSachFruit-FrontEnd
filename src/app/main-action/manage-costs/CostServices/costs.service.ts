import { SearchCostRequest } from './../../../Requests/search-request';
import { SummaryService } from './../../../services/summary.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CostsService {

  constructor(private service: SummaryService) { }

  searchCost(searchCostRequest: SearchCostRequest){
    return this.service.searchCost(searchCostRequest);
  }
  deleteCost(id: string){
    return this.service.deleteCost(id);
  }
  getDetailsCost(id: string){
    return this.service.getDetailsCost(id);
  }
  getAllCostType(){
    return this.service.getAllCostType();
  }
  storeNewCost(data){
    return this.service.storeNewCost(data);
  }
  updateCost(data,id:string){
    return this.service.updateCost(data,id);
  }
}
