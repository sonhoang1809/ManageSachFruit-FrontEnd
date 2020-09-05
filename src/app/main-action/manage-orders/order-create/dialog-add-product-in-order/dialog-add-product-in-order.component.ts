import { Product } from './../../../../models/product';
import { OrderService } from './../../OrderServices/order.service';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from './../../../../models/category';
import { GeneralHelperService } from './../../../../services/general-helper.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-add-product-in-order',
  templateUrl: './dialog-add-product-in-order.component.html',
  styleUrls: ['./dialog-add-product-in-order.component.css']
})
export class DialogAddProductInOrderComponent implements OnInit {

  listCategory: Category[] = null;
  listProduct: Product[] = null;
  selectedProduct: Product = null;
  //maxQuantity: number = 0;
  public inputFormControl: FormGroup = null;
  constructor(public generalService: GeneralHelperService, private dialogRef: MatDialogRef<DialogAddProductInOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private orderService: OrderService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    
    this.listCategory = this.data.listCategory;
    this.inputFormControl = new FormGroup({
      productId: new FormControl('', [Validators.required]),
      productName: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      quantity: new FormControl(0, [Validators.required, Validators.min(0.1)]),
      unit: new FormControl('', [Validators.required]),
      unitPrice: new FormControl(0, [Validators.required, Validators.min(1000)]),
      categoryId: new FormControl('', [Validators.required])
    });
  }
  onSelectCategory(data) {
    this.orderService.getListProductOfCategory(data.value).subscribe(
      (response) => {
        this.listProduct = response.data;
      },
      (error) => {
        this.generalService.handleError(error);
      }
    )
  }
  // getProductInList(id) {
  //   for (var prod of this.listProduct) {
  //     if (prod.id == id) {
  //       this.selectedProduct = prod;
  //       return prod;
  //     }
  //   }
  //   return null;
  // }
  onSelectProduct(data) {
    console.log(data);
    //this.getProductInList(data);
    this.selectedProduct = data;
    this.inputFormControl.controls["productId"].setValue(this.selectedProduct.id);
    this.inputFormControl.controls["unit"].setValue(this.selectedProduct.unit);
    this.inputFormControl.controls["productName"].setValue(this.selectedProduct.productName);
    this.inputFormControl.controls["unitPrice"].setValue(this.selectedProduct.unitPrice);
    //let prod = this.getProductInList(data);
    //this.maxQuantity = this.selectedProduct.quantityInStock;
    this.inputFormControl.controls["quantity"].setValidators([Validators.required, Validators.min(0.1), Validators.max(this.selectedProduct.quantityInStock)]);
    //console.log(this.inputFormControl.controls["quantity"].validator["max"]);
  }
  onStoreProductToOrder(data) {
    console.log(data);
    if (this.inputFormControl.valid) {
      this.dialogRef.close(data);
    }
    // else{
    //   this.generalService.handleErrorInput();
    // }
  }

}
