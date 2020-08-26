import { StoreProductRequest } from './../../models/product';
import { ProductsService } from './../products.service';
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material/dialog';
import { ProductDetails } from 'src/app/models/product';
import { Category } from 'src/app/models/category';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  categories: Category[] = [];
  inputForm;


  constructor(private  dialogRef:  MatDialogRef<ProductDetailsComponent>, 
    @Inject(MAT_DIALOG_DATA) public  data:  ProductDetails, private productService: ProductsService,
    private formBuilder: FormBuilder) {
      this.inputForm = this.formBuilder.group({
        productName: '',
        description: '',
        quantityInStock: '',
        unit: '',
        unitPrice: '',
        categoryId: '',
        importPrice: ''
      });
    }

    onStoreProduct(data){
      //console.log(data);
      this.productService.storeNewProduct(data);
    }

  ngOnInit(): void {

    this.productService.getAllCategories().subscribe(response=>{
      if(this.data!=null){
        for(var category of response.data){
          if(this.data.category.id!=category.id){
            this.categories.push(category);
          }
        }
      }else{
        this.categories=response.data;
      }
      
    });
  }


}
