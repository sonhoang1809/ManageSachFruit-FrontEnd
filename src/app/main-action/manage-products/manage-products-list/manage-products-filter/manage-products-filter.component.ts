import { Category } from './../../../../models/category';
import { ProductsService } from './../../products.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-manage-products-filter',
  templateUrl: './manage-products-filter.component.html',
  styleUrls: ['./manage-products-filter.component.css']
})
export class ManageProductsFilterComponent implements OnInit {

  categoryList: Category[];
  categoryIds: string[] = [];
  @Output() selectedCategory: EventEmitter<string[]> = new EventEmitter<string[]>();
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    //this.categoryList = this.productService.getCategories();
    this.productService.getAllCategories().subscribe(response=>{
      this.categoryList = response.data;
    });
  }

  selectCategory(categoryId: string){
    if(this.categoryIds.includes(categoryId)){
      this.categoryIds.splice(this.categoryIds.indexOf(categoryId),1);
    }else{
      this.categoryIds.push(categoryId);
    }
    //console.log(this.categoryIds);
    this.selectedCategory.emit(this.categoryIds);
  }

}
