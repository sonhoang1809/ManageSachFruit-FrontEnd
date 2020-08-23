import { SearchOrdersRequest } from './../../Requests/search-orders-request';
import { OrderDetails } from './../../models/order-details';
import { RecentOrderService } from './../../services/recent-order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-order',
  templateUrl: './recent-order.component.html',
  styleUrls: ['./recent-order.component.css']
})
export class RecentOrderComponent implements OnInit {

  recentOrders: Array<OrderDetails> = [];

  constructor(private orderService: RecentOrderService) { }

  ngOnInit(): void {
    var searchOrder: SearchOrdersRequest = {
      Limit: 5,
      Page: 1,
      Search:"",
      SortField:"",
      SortOrder:""
    };

    this.orderService.searchOrder(searchOrder)
    .subscribe( response => {
      console.log(response.data.data);
      var data = response.data.data;
      for(let i=0;i<data.length;i++){
        this.recentOrders.push(new OrderDetails(data[i].orderId,data[i].customerName,data[i].total,data[i].orderTime));
      }
    });
    
  }

}
