import { MessageComponent } from './../../message/message.component';
import { StoreProductRequest, Product } from './../../models/product';
import { ProductsService } from './../products.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
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
  updateForm;
  productDetails: ProductDetails = null;

  constructor(private dialogRef: MatDialogRef<ProductDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductDetails, private productService: ProductsService,
    private formBuilder: FormBuilder, private dialog: MatDialog) {
      
    this.inputForm = this.formBuilder.group({
      productName: '',
      description: '',
      quantityInStock: '',
      unit: '',
      unitPrice: '',
      categoryId: '',
      importPrice: ''
    });

    this.updateForm = this.formBuilder.group({
      productName: '',
      description: '',
      quantityInStock: '',
      unit: '',
      unitPrice: '',
      categoryId: '',
      importPrice: ''
    });
  }
  ngOnInit(): void {
    this.productService.getDetailsProduct(this.data.id).subscribe(response => {
      this.data = response.data;
      //console.log(this.productDetails);
    });
    this.categories = this.productService.categoryList;

  }

  onUpdateProduct(data, id: string){
    console.log(data);
    this.productService.updateProduct(data,id).subscribe(
      (response)=> {
        this.handleMessage(response.message);
        this.productService.updateProductInList(response.data);
        this.dialogRef.close();
      },
      (error)=>{
        console.log(error);
        this.handleError(error.error.message);
      }
    )
  }

  onStoreProduct(data) {
    this.productService.storeNewProduct(data).subscribe(
      (response) => {
        //console.log(response.data);
        this.handleMessage(response.message);
        if(this.productService.pageInfo.isLastPage && this.productService.productList.length<5){
          this.productService.addProduct(response.data);
        }
        this.dialogRef.close();
      },
      (error) => {
        console.log(error);
        this.handleError(error.error.message);
      }
    );
    
  }

  handleMessage(message) {
    this.dialog.open(MessageComponent, {
      panelClass: 'myapp-no-padding-dialog',
      position: {
        bottom: '50px',
        right: ' 50px'
      },
      data: message
    });
  }

  handleError(error) {
    this.dialog.open(MessageComponent, {
      panelClass: 'myapp-no-padding-dialog',
      position: {
        bottom: '50px',
        right: ' 50px'
      },
      data: error
    });
  }


}
