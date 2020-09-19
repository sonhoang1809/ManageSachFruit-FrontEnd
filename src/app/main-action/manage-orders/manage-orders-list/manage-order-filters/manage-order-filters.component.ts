import { GeneralHelperService } from './../../../../services/general-helper.service';
import { OrderService } from './../../OrderServices/order.service';
import { City, District, Ward } from './../../../../models/position';
import { SearchOrderRequest } from './../../../../Requests/search-request';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-manage-order-filters',
  templateUrl: './manage-order-filters.component.html',
  styleUrls: ['./manage-order-filters.component.css']
})
export class ManageOrderFiltersComponent implements OnInit {

  //@Output() searchOrderRequest: EventEmitter<SearchOrderRequest>= new EventEmitter<SearchOrderRequest>();
  @Output() customerName: EventEmitter<string> = new EventEmitter<string>();
  @Output() specificAddress: EventEmitter<string> = new EventEmitter<string>();
  @Output() phoneCustomer: EventEmitter<string> = new EventEmitter<string>();

  // addressNumber: string = null;
  address: string[] = ["", "", "", ""];
  search: SearchOrderRequest = null;

  listCity: City[] = null;
  listDistrict: District[] = null;
  listWard: Ward[] = null;

  constructor(private orderService: OrderService, private generalHelper: GeneralHelperService) { }

  ngOnInit(): void {
    this.orderService.getAllCity().subscribe(
      (response) => {
        //console.log(response);
        this.listCity = response.LtsItem;
      },
      (error) => {
        this.generalHelper.handleError(error);
      }
    )
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
    this.specificAddress.emit(this.getAddress());
    this.listDistrict = null;
    this.listWard = null;
    this.orderService.getAllDistrictInCity(data.value.ID).subscribe(
      (response) => {
        this.listDistrict = response;
      },
      (error) => {
        this.generalHelper.handleError(error);
      }
    );
  }
  onSelectDistrict(data) {
    console.log(data.value);
    this.address[2] = data.value.Title;
    this.specificAddress.emit(this.getAddress());

    this.listWard = null;
    this.orderService.getAllWardInDistrict(data.value.ID).subscribe(
      (response) => {
        this.listWard = response;
      },
      (error) => {
        this.generalHelper.handleError(error);
      }
    );
  }
  onSelectWard(data) {
    //this.listWard = null;
    //console.log(data.value);
    this.address[1] = data.value.Title;
    this.specificAddress.emit(this.getAddress());
  }
  onChangeSpecificAddress(data) {
    this.address[0] = data.target.value;
    this.specificAddress.emit(this.getAddress());

  }
  onChangeNameCustomer(data) {
    this.customerName.emit(data.target.value);
  }


  onChangePhone(data) {
    this.phoneCustomer.emit(data.target.value);
    //this.searchRequest.phone=data.target.value;
    //this.searchOrderRequest.emit(this.searchRequest);
  }
}
