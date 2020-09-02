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

  @Output() searchOrderRequest: EventEmitter<SearchOrderRequest>= new EventEmitter<SearchOrderRequest>();
  @Input() searchRequest: SearchOrderRequest;
  listCity: City[] = null;
  listDistrict: District[] = null;
  listWard: Ward[] = null;

  constructor(private orderService: OrderService,private generalHelper: GeneralHelperService) { }

  ngOnInit(): void {
    this.orderService.getAllCity().subscribe(
      (response)=>{
        console.log(response);
        this.listCity = response.LtsItem;
      },
      (error)=>{
        this.generalHelper.handleError(error);
      }
    )
  }
  onChangeNameCustomer(data){
    this.searchRequest.search=data.target.value;
    this.searchOrderRequest.emit(this.searchRequest);
  }
  onChangeAddress(data){
    this.searchRequest.address=data.target.value;
    this.searchOrderRequest.emit(this.searchRequest);
  }

  onChangePhone(data){
    this.searchRequest.phone=data.target.value;
    this.searchOrderRequest.emit(this.searchRequest);
  }
}
