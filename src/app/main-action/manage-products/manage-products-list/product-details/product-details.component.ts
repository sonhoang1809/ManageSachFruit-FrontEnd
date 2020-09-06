import { WaitingComponent } from './../../../../sharings/waiting/waiting.component';
import { MyErrorStateMatcher } from './../../../../sharings/my-error-state-matcher';
import { DateTime } from './../../../../models/date-time';
import { ProductsService } from '../../ProductServices/products.service';
import { GeneralHelperService } from './../../../../services/general-helper.service';
import { MessageComponent } from './../../../../message/message.component';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ProductDetails } from 'src/app/models/product';
import { Category } from 'src/app/models/category';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  categories: Category[] = [];
  units: string[] = [];
  unitSelected: string;
  categorySelected: string;
  //inputForm = null;
  //updateForm = null;
  productDetails: ProductDetails = null;

  public inputFormControl: FormGroup = null;
  matcher = new MyErrorStateMatcher();


  constructor(private dialogRef: MatDialogRef<ProductDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductDetails, private productService: ProductsService,
    private formBuilder: FormBuilder, private dialog: MatDialog, public generalService: GeneralHelperService) {
  }

  ngOnInit(): void {

    if (this.data != null) {
      this.productService.getDetailsProduct(this.data.id).subscribe(response => {
        this.data = response.data;
        this.categorySelected = this.data.category.id;
        this.unitSelected = this.data.unit;
        
        this.inputFormControl = new FormGroup({
          productName: new FormControl(this.data.productName, [Validators.required, Validators.maxLength(50)]),
          description: new FormControl(this.data.description, [Validators.required, Validators.maxLength(100)]),
          quantityInStock: new FormControl(this.data.quantityInStock, [Validators.required, Validators.min(1)]),
          unit: new FormControl(this.data.unit, [Validators.required]),
          unitPrice: new FormControl(this.data.unitPrice, [Validators.required, Validators.min(1000)]),
          categoryId: new FormControl(this.data.category.id, [Validators.required]),
          importPrice: new FormControl(this.data.cost.total, [Validators.required, Validators.min(1000)])
        });
      });
    } else if (this.data == null) {

      this.inputFormControl = new FormGroup({
        productName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
        description: new FormControl('', [Validators.required, Validators.maxLength(100)]),
        quantityInStock: new FormControl('', [Validators.required, Validators.min(1)]),
        unit: new FormControl('', [Validators.required]),
        unitPrice: new FormControl('', [Validators.required, Validators.min(1000)]),
        categoryId: new FormControl('', [Validators.required]),
        importPrice: new FormControl('', [Validators.required, Validators.min(1000)])
      });
    }
    // this.categories = this.productService.getCategories();
    this.productService.getAllCategories().subscribe(
      (response) => {
        this.categories = response.data;

      },
      (error) => {
        this.generalService.handleError(error);
      }
    );
    this.productService.getAllUnits().subscribe(
      (response) => {
        this.units = response.data;
      },
      (error) => {
        this.generalService.handleError(error);
      }
    );
  }
  // public hasError = (controlName: string, errorName: string) =>{
  //   return this.inputFormControl.controls[controlName].hasError(errorName);
  // }
  getToStringTime(time: DateTime) {
    return this.generalService.getToStringTime(time);
  }

  onUpdateProduct(data, id: string) {
    //console.log(data);
    if (this.inputFormControl.valid) {
      this.generalService.openWaitingPopup();
      //const dialogWaitingRef = this.dialog.open(WaitingComponent);
      this.productService.updateProduct(data, id).subscribe(
        (response) => {
          this.generalService.closeWaitingPopup();
          this.generalService.handleMessage("Success", response.message);
          this.dialogRef.close(true);
        },
        (error) => {
          this.generalService.closeWaitingPopup();
          console.log(error);
          this.generalService.handleError(error);
        }
      );
    }
  }

  onStoreProduct(data) {
    if (this.inputFormControl.valid) {
      this.generalService.openWaitingPopup();
      this.productService.storeNewProduct(data).subscribe(
        (response) => {
          this.generalService.closeWaitingPopup();
          this.generalService.handleMessage("Success", response.message);
          this.dialogRef.close(true);
        },
        (error) => {
          this.generalService.closeWaitingPopup();
          console.log(error);
          this.generalService.handleError(error);
        }
      );
    }
  }
}
