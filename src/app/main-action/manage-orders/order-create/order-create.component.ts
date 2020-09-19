import { Category } from './../../../models/category';
import { DialogAddProductInOrderComponent } from './dialog-add-product-in-order/dialog-add-product-in-order.component';
import { MatDialog } from '@angular/material/dialog';
import { ProductsDetailsInOrder } from './../../../models/order-details';
import { OrderService } from './../OrderServices/order.service';
import { City, District, Ward } from './../../../models/position';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GeneralHelperService } from './../../../services/general-helper.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {

  public inputFormControl: FormGroup = null;
  address: string[] = ["", "", "", ""];
  listCity: City[] = null;
  listDistrict: District[] = null;
  listWard: Ward[] = null;

  productsInOrder: ProductsDetailsInOrder[] = [];
  total: number = 0;
  listCategory: Category[] = null;
  constructor(public generalService: GeneralHelperService, private orderService: OrderService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.initInputForm();

    this.orderService.getAllCity().subscribe(
      (response) => {
        //console.log(response);
        this.listCity = response.LtsItem;
      },
      (error) => {
        this.generalService.handleError(error);
      }
    );
    this.orderService.getAllCategories().subscribe(
      (response) => {
        this.listCategory = response.data;
      },
      (error) => {
        this.generalService.handleError(error);
      }
    );
  }
  getAddress(): string {
    var specificAddress = "";
    for (var ad of this.address) {
      if (this.address.indexOf(ad) < 3 && ad != "") {
        specificAddress = specificAddress + ad + ', ';
      } else {
        specificAddress = specificAddress + ad;
      }
    }
    //console.log("specific: "+specificAddress);
    return specificAddress;
  }
  onSelectCity(data) {
    //console.log(data.value);
    this.address[3] = data.value.Title;
    this.inputFormControl.controls["address"].setValue(this.getAddress());
    //console.log(this.inputFormControl.controls["address"].value);
    //this.specificAddress.emit(this.getAddress());
    this.listDistrict = null;
    this.listWard = null;
    this.orderService.getAllDistrictInCity(data.value.ID).subscribe(
      (response) => {
        this.listDistrict = response;
      },
      (error) => {
        this.generalService.handleError(error);
      }
    );
  }
  onSelectDistrict(data) {
    //console.log(data.value);
    this.address[2] = data.value.Title;
    this.inputFormControl.controls["address"].setValue(this.getAddress());
    //console.log(this.inputFormControl.controls["address"].value);
    //this.specificAddress.emit(this.getAddress());

    this.listWard = null;
    this.orderService.getAllWardInDistrict(data.value.ID).subscribe(
      (response) => {
        this.listWard = response;
      },
      (error) => {
        this.generalService.handleError(error);
      }
    );
  }
  onSelectWard(data) {
    //this.listWard = null;
    //console.log(data.value);
    this.address[1] = data.value.Title;
    this.inputFormControl.controls["address"].setValue(this.getAddress());
    //console.log(this.inputFormControl.controls["address"].value);
    //this.specificAddress.emit(this.getAddress());
  }
  onChangeSpecificAddress(data) {
    this.address[0] = data.target.value;
    this.inputFormControl.controls["address"].setValue(this.getAddress());
    //console.log(this.inputFormControl.controls["address"].value);

  }

  openDialogAddProductToOrder() {
    let dialogRef = this.dialog.open(DialogAddProductInOrderComponent, {
      width: '580px',
      data: { listCategory: this.listCategory }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined){
        //console.log(result);
        this.addToProductsInOrder(result);
        this.calculateTotal();
      }
    });
  }
  calculateTotal(){
    this.inputFormControl.controls["total"].setValue(this.getSubTotalInOrder() + this.inputFormControl.controls["shipCost"].value);
  }
  addToProductsInOrder(data) {
    if (this.checkContainInListProductInOrder(data)) {
      for (var prod of this.productsInOrder) {
        if (prod.productId == data.productId) {
          this.productsInOrder[this.productsInOrder.indexOf(prod)].quantity =
            this.productsInOrder[this.productsInOrder.indexOf(prod)].quantity + data.quantity;
        }
      }
    } else {
      this.productsInOrder.push(data);
    }
  }
  checkContainInListProductInOrder(data): boolean {
    for (var prod of this.productsInOrder) {
      if (prod.productId == data.productId) {
        return true;
      }
    }
    return false;
  }
  getSubTotalInOrder() {
    var result = 0;
    for (var prod of this.productsInOrder) {
      result = result + prod.quantity * prod.unitPrice;
    }
    return result;
  }

  onStoreOrder(data) {
    //console.log(data);
    if (this.productsInOrder.length == 0) {
      this.generalService.handleSpecificError({ title: 'Input is not correct!!', message: 'Không có sản phẩm nào trong order!! Không thể tạo' });
    }else if(!this.inputFormControl.valid){
      this.generalService.handleErrorInput();
      if(!this.inputFormControl.controls['customerName'].valid){
        console.log('customerName has error');
      }
      if(!this.inputFormControl.controls['addressCity'].valid){
        console.log('addressCity has error');
      }
      if(!this.inputFormControl.controls['addressDistrict'].valid){
        console.log('addressDistrict has error');
      }
      if(!this.inputFormControl.controls['addressWard'].valid){
        console.log('addressWard has error');
      }
      if(!this.inputFormControl.controls['addressSpecific'].valid){
        console.log('addressSpecific has error');
      }
      if(!this.inputFormControl.controls['address'].valid){
        console.log('address has error');
      }
      if(!this.inputFormControl.controls['phone'].valid){
        console.log('phone has error');
      }
      if(!this.inputFormControl.controls['total'].valid){
        console.log('total has error');
      }
      if(!this.inputFormControl.controls['shipCost'].valid){
        console.log('shipCost has error');
      }
      if(!this.inputFormControl.controls['productsInOrder'].valid){
        console.log('productsInOrder has error');
      }

    }else{
      this.generalService.openWaitingPopup();
      this.orderService.storeOrder(data).subscribe(
        (response)=>{
          this.clearInputForm();
          this.generalService.closeWaitingPopup();
          this.generalService.handleMessage('Store Success',response.message);
        },
        (error)=>{
          this.generalService.closeWaitingPopup();
          this.generalService.handleError(error);
        }
      );
    }
  }
  initInputForm(){
    this.productsInOrder = [];
    this.inputFormControl = new FormGroup({
      customerName: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      addressCity: new FormControl('', [Validators.required]),
      addressDistrict: new FormControl('', [Validators.required]),
      addressWard: new FormControl('', [Validators.required]),
      addressSpecific: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required,Validators.minLength(10), Validators.maxLength(10)]),
      total: new FormControl(0, [Validators.required, Validators.min(0)]),
      shipCost: new FormControl(0, [Validators.required, Validators.min(0)]),
      productsInOrder: new FormControl(this.productsInOrder)
    });
  }
  clearInputForm(){
    this.productsInOrder = [];
    this.inputFormControl.controls['customerName'].setValue('');
    this.inputFormControl.controls['addressCity'].setValue('');
    this.inputFormControl.controls['addressDistrict'].setValue('');
    this.inputFormControl.controls['addressWard'].setValue('');
    this.inputFormControl.controls['addressSpecific'].setValue('');
    this.inputFormControl.controls['address'].setValue('');
    this.inputFormControl.controls['phone'].setValue('');
    this.inputFormControl.controls['total'].setValue('');
    this.inputFormControl.controls['shipCost'].setValue('');
    this.inputFormControl.controls['productsInOrder'].setValue(this.productsInOrder);
  }
  onClickProductsInOrder(data){
    console.log('Click prod');
  }
  onDeleteProductInOrder(data){
    //console.log(this.productsInOrder.indexOf(data));
    this.productsInOrder.splice(this.productsInOrder.indexOf(data),1);
  }

}
