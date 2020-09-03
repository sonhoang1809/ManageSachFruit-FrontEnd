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
  address: string[] = ["","","",""];
  listCity: City[] = null;
  listDistrict: District[] = null;
  listWard: Ward[] = null;
  constructor(public generalService: GeneralHelperService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.inputFormControl = new FormGroup({
      productName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      quantityInStock: new FormControl('', [Validators.required, Validators.min(1)]),
      unit: new FormControl('', [Validators.required]),
      unitPrice: new FormControl('', [Validators.required, Validators.min(1000)]),
      categoryId: new FormControl('', [Validators.required]),
      importPrice: new FormControl('', [Validators.required, Validators.min(1000)])
    });
    this.orderService.getAllCity().subscribe(
      (response)=>{
        //console.log(response);
        this.listCity = response.LtsItem;
      },
      (error)=>{
        this.generalService.handleError(error);
      }
    )
  }
  onSelectCity(data){
    console.log(data.value);
    this.address[3] = data.value.Title;
    //this.specificAddress.emit(this.getAddress());
    this.listDistrict = null;
    this.listWard = null;
    this.orderService.getAllDistrictInCity(data.value.ID).subscribe(
      (response)=>{
        this.listDistrict = response;
      },
      (error)=>{
        this.generalService.handleError(error);
      }
    );
  }
  onSelectDistrict(data){
    console.log(data.value);
    this.address[2] = data.value.Title;
    //this.specificAddress.emit(this.getAddress());

    this.listWard = null;
    this.orderService.getAllWardInDistrict(data.value.ID).subscribe(
      (response)=>{
        this.listWard = response;
      },
      (error)=>{
        this.generalService.handleError(error);
      }
    );
  }
  onSelectWard(data){
    //this.listWard = null;
    console.log(data.value);
    this.address[1] = data.value.Title;
    //this.specificAddress.emit(this.getAddress());
  }

}
