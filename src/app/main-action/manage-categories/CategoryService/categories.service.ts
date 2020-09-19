import { SearchRequest } from './../../../Requests/search-request';
import { SummaryService } from './../../../services/summary.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private service: SummaryService) { }
  
  searchCategories(searchRequest: SearchRequest){
    return this.service.searchCategories(searchRequest);
  }

  getDetailsCategories(id: number){
    return this.service.getDetailsCategory(id);
  }

  storeNewCategory(data){
    return this.service.storeNewCategory(data);
  }
  updateCategory(data,id){
    return this.service.updateCategory(data,id);
  }
  deleteCategory(id){
    return this.service.deleteCategory(id);
  }
}
