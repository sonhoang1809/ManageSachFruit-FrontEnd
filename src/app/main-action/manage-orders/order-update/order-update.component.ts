import { DialogAddProductInOrderComponent } from './../order-create/dialog-add-product-in-order/dialog-add-product-in-order.component';
import { Category } from './../../../models/category';
import { ProductsDetailsInOrder, OrderDetails } from './../../../models/order-details';
import { City, District, Ward } from './../../../models/position';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { OrderService } from './../OrderServices/order.service';
import { GeneralHelperService } from './../../../services/general-helper.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-update',
  templateUrl: './order-update.component.html',
  styleUrls: ['./order-update.component.css']
})
export class OrderUpdateComponent implements OnInit {

  public inputFormControl: FormGroup = null;

  orderDetails: OrderDetails = null;

  address: string[] = ["", "", "", ""];
  listCity: City[] = null;
  selectedCity: City;
  listDistrict: District[] = null;
  selectedDistrict: District;
  listWard: Ward[] = null;
  selectedWard: Ward;
  productsInOrder: ProductsDetailsInOrder[] = [];
  total: number = 0;
  listCategory: Category[] = null;

  constructor(private route: ActivatedRoute,
    private router: Router,
    public generalService: GeneralHelperService,
    private orderService: OrderService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.orderService.getAllCategories().subscribe(
      (response) => {
        this.listCategory = response.data;
      },
      (error) => {
        this.generalService.handleError(error);
      }
    );
    //this.getListCity();
    this.inputFormControl = new FormGroup({
      customerName: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      addressCity: new FormControl('', [Validators.required]),
      addressDistrict: new FormControl('', [Validators.required]),
      addressWard: new FormControl('', [Validators.required]),
      addressSpecific: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      total: new FormControl(0, [Validators.required, Validators.min(0)]),
      shipCost: new FormControl(0, [Validators.required, Validators.min(0)]),
      productsInOrder: new FormControl(this.productsInOrder)
    });
    this.initInputForm();
  }

  getListCity() {
    this.orderService.getAllCity().subscribe(
      (response) => {
        //console.log(response);
        this.listCity = response.LtsItem;
      },
      (error) => {
        this.generalService.handleError(error);
      }
    );
  }

  getSelectedCity(cityTitle) {
    for (var city of this.listCity) {
      if (city.Title == cityTitle) {
        return city;
      }
    }
    return null;
  }
  getSelectedDistrict(districtTitle) {
    for (var district of this.listDistrict) {
      if (district.Title == districtTitle) {
        return district;
      }
    }
    return null;
  }
  getSelectedWard(wardTitle) {
    for (var ward of this.listWard) {
      if (ward.Title == wardTitle) {
        return ward;
      }
    }
    return null;
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
    console.log(data.value);
    this.address[2] = data.value.Title;
    this.inputFormControl.controls["address"].setValue(this.getAddress());
    console.log(this.inputFormControl.controls["address"].value);
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

  initInputForm() {
    this.generalService.openWaitingPopup();

    this.route.paramMap.subscribe(params => {
      var orderId = params.get('orderId');
      this.orderService.getOrderDetails(orderId).subscribe(
        (response) => {
          this.orderDetails = response.data;
          this.orderService.getAllCity().subscribe(
            (response) => {
              //console.log(response);
              this.listCity = response.LtsItem;       
              this.productsInOrder = this.orderDetails.productsDetailsInOrder;
              console.log(this.productsInOrder);
              this.address = this.orderDetails.address.split(',');

              this.selectedCity = this.getSelectedCity(this.address[3].trim());
              //console.log('selectedCity:' + this.selectedCity);
              this.orderService.getAllDistrictInCity(this.selectedCity.ID).subscribe(
                (response) => {
                  this.listDistrict = response;
                  this.selectedDistrict = this.getSelectedDistrict(this.address[2].trim());
                  //console.log('selectedDistrict:' + this.selectedDistrict);
                  this.orderService.getAllWardInDistrict(this.selectedDistrict.ID).subscribe(
                    (response) => {
                      this.listWard = response;
                      this.selectedWard = this.getSelectedWard(this.address[1].trim());
                      //console.log('selectedWard:' + this.selectedWard);
                      this.inputFormControl = new FormGroup({
                        customerName: new FormControl(this.orderDetails.customerName, [Validators.required, Validators.maxLength(100)]),
                        addressCity: new FormControl(this.selectedCity, [Validators.required]),
                        addressDistrict: new FormControl(this.selectedDistrict, [Validators.required]),
                        addressWard: new FormControl(this.selectedWard, [Validators.required]),
                        addressSpecific: new FormControl(this.address[0], [Validators.required]),
                        address: new FormControl(this.orderDetails.address, [Validators.required]),
                        phone: new FormControl(this.orderDetails.phone, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
                        total: new FormControl(this.orderDetails.total, [Validators.required, Validators.min(0)]),
                        shipCost: new FormControl(this.orderDetails.shipCost, [Validators.required, Validators.min(0)]),
                        productsInOrder: new FormControl(this.productsInOrder)
                      });
                      this.generalService.closeWaitingPopup();
                    },
                    (error) => {
                      this.generalService.closeWaitingPopup();
                      this.generalService.handleError(error);
                    }
                  );
                },
                (error) => {
                  this.generalService.closeWaitingPopup();
                  this.generalService.handleError(error);
                }
              );
            },
            (error) => {
              this.generalService.handleError(error);
            }
          );


        },
        (error) => {
          this.generalService.closeWaitingPopup();
          this.generalService.handleError(error);
          this.router.navigate(['../order-list']);
        }
      )
    });
  }
  getSubTotalInOrder() {
    var result = 0;
    for (var prod of this.productsInOrder) {
      result = result + prod.quantity * prod.unitPrice;
    }
    return result;
  }
  openDialogAddProductToOrder() {
    let dialogRef = this.dialog.open(DialogAddProductInOrderComponent, {
      width: '580px',
      data: { listCategory: this.listCategory }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        console.log(result);
        this.addToProductsInOrder(result);
        this.calculateTotal();
      }
    });
  }
  calculateTotal() {
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
  onUpdateOrder(data) {
    console.log(data);
    if (this.productsInOrder.length == 0) {
      this.generalService.handleSpecificError({ title: 'Input is not correct!!', message: 'Không có sản phẩm nào trong order!! Không thể tạo' });
    } else if (!this.inputFormControl.valid) {
      this.generalService.handleErrorInput();
      if (!this.inputFormControl.controls['customerName'].valid) {
        console.log('customerName has error');
      }
      if (!this.inputFormControl.controls['addressCity'].valid) {
        console.log('addressCity has error');
      }
      if (!this.inputFormControl.controls['addressDistrict'].valid) {
        console.log('addressDistrict has error');
      }
      if (!this.inputFormControl.controls['addressWard'].valid) {
        console.log('addressWard has error');
      }
      if (!this.inputFormControl.controls['addressSpecific'].valid) {
        console.log('addressSpecific has error');
      }
      if (!this.inputFormControl.controls['address'].valid) {
        console.log('address has error');
      }
      if (!this.inputFormControl.controls['phone'].valid) {
        console.log('phone has error');
      }
      if (!this.inputFormControl.controls['total'].valid) {
        console.log('total has error');
      }
      if (!this.inputFormControl.controls['shipCost'].valid) {
        console.log('shipCost has error');
      }
      if (!this.inputFormControl.controls['productsInOrder'].valid) {
        console.log('productsInOrder has error');
      }

    } else {
      let orderId = this.orderDetails.id;
      //console.log('update success');
      this.generalService.openWaitingPopup();
      this.orderService.updateOrder(data,orderId).subscribe(
        (response)=>{
          //this.clearInputForm();
          this.generalService.closeWaitingPopup();
          this.generalService.handleMessage('Update Success',response.message);
        },
        (error)=>{
          this.generalService.closeWaitingPopup();
          this.generalService.handleError(error);
        }
      );
    }
  }

  onDeleteProductInOrder(data){
    //console.log(this.productsInOrder.indexOf(data));
    this.productsInOrder.splice(this.productsInOrder.indexOf(data),1);
  }
}
