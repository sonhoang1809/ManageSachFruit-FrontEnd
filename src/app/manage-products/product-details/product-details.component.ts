import { GeneralHelperService } from './../../services/general-helper.service';
import { MessageComponent } from './../../message/message.component';
import { StoreProductRequest, Product } from './../../models/product';
import { ProductsService } from './../products.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ProductDetails } from 'src/app/models/product';
import { Category } from 'src/app/models/category';
import { FormBuilder } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  categories: Category[] = [];
  categorySelected: string;
  inputForm = null;
  updateForm = null;
  productDetails: ProductDetails = null;

  //selectFormControl = new FormControl('', Validators.required);

  constructor(private dialogRef: MatDialogRef<ProductDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductDetails, private productService: ProductsService,
    private formBuilder: FormBuilder, private dialog: MatDialog, private generalService: GeneralHelperService) {
      
    this.inputForm = this.formBuilder.group({
      productName: '',
      description: '',
      quantityInStock: '',
      unit: '',
      unitPrice: '',
      categoryId: '',
      importPrice: ''
    });

    // this.updateForm = this.formBuilder.group({
    //   productName: '',
    //   description: '',
    //   quantityInStock: '',
    //   unit: '',
    //   unitPrice: '',
    //   categoryId: '',
    //   importPrice: ''
    // });
  }
  ngOnInit(): void {
    if (this.data != null) {
      this.productService.getDetailsProduct(this.data.id).subscribe(response => {
        this.data = response.data;
        this.categorySelected = this.data.category.id;

        
        this.updateForm = this.formBuilder.group({
          productName: this.data.productName,
          description: this.data.description,
          quantityInStock: this.data.quantityInStock,
          unit: this.data.unit,
          unitPrice: this.data.unitPrice,
          categoryId: this.data.category.id,
          importPrice: this.data.cost.total
        });
      });
    }
    this.categories = this.productService.getCategories();

  }

  onUpdateProduct(data, id: string) {
    //console.log(data);
    this.productService.updateProduct(data, id).subscribe(
      (response) => {
        this.generalService.handleMessage("Success",response.message);
        this.productService.updateProductInList(response.data);
        this.dialogRef.close();
      },
      (error) => {
        console.log(error);
        this.generalService.handleError('Error code: '+error.error.statusCode,error.error.message);
      }
    )
  }

  onStoreProduct(data) {
    this.productService.storeNewProduct(data).subscribe(
      (response) => {
        //console.log(response.data);
        this.generalService.handleMessage("Success",response.message);
        this.productService.addProduct(response.data);
        this.dialogRef.close();
      },
      (error) => {
        console.log(error);
        this.generalService.handleError('Error code: '+error.error.statusCode,error.error.message);
      }
    );

  }

}
