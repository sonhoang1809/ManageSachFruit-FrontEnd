import { DateTime } from './../../models/date-time';
import { SummaryService } from './../../services/summary.service';
import { SearchRequest } from '../../Requests/search-request';
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
      SortField:"create_at",
      SortOrder: 1
    };

    this.summaryService.searchOrder(searchOrder)
    .subscribe( response => {
      for(var data of response.data.data){

        this.recentOrders.push(
          new OrderDetails(data.id,data.customerName,data.total,
            new DateTime(data.createAt.day,data.createAt.month,data.createAt.year,data.createAt.hour,
              data.createAt.minute,data.createAt.second)
          )
        );
      }
    });
    
  }

}
