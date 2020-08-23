import { SummaryService } from './../../services/summary.service';
import { SearchRequest } from './../../Requests/search-orders-request';
import { OrderDetails } from './../../models/order-details';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-order',
  templateUrl: './recent-order.component.html',
  styleUrls: ['./recent-order.component.css']
})
export class RecentOrderComponent implements OnInit {

  recentOrders: Array<OrderDetails> = [];

  constructor(private summaryService: SummaryService) { }

  ngOnInit(): void {
    var searchOrder: SearchRequest = {
      Limit: 5,
      Page: 1,
      Search:"",
      SortField:"",
      SortOrder:""
    };

    this.summaryService.searchOrder(searchOrder)
    .subscribe( response => {
      console.log(response.data.data);
      for(var data of response.data.data){
        this.recentOrders.push(data);
      }
    });
    
  }

}
