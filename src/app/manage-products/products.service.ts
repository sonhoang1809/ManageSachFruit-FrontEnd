import { SummaryService } from './../services/summary.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private service: SummaryService) { }

  getAllCategories(){
    return this.service.getAllCategories();
  }
  storeNewProduct(data){
    return this.service.storeNewProduct(data).subscribe(response=>{
      console.log(response.data);
    });
  }

}
