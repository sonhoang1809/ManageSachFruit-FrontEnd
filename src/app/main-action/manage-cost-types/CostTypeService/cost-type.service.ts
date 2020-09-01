import { SearchRequest } from './../../../Requests/search-request';
import { SummaryService } from './../../../services/summary.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CostTypeService {

  constructor(private service: SummaryService) { }
  
  searchCostType(searchRequest: SearchRequest){
    return this.service.searchCostType(searchRequest);
  }
  getDetailsCostType(id: number){
    return this.service.searchCostTypeDetails(id);
  }
}
