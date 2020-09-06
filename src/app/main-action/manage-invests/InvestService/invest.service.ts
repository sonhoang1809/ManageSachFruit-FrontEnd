import { SummaryService } from './../../../services/summary.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvestService {

  constructor(private service: SummaryService) { }
  searchInvest(searchRequest){
    return this.service.searchInvest(searchRequest);
  }
  storeNewInvest(data){
    return this.service.storeNewInvest(data);
  }
  updateInvest(data,id){
    return this.service.updateInvest(data,id);
  }
  deleteInvest(id){
    return this.service.deleteInvest(id);
  }

}
