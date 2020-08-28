import { OrderDetails } from './../../../models/order-details';
import { SearchRequest } from './../../../Requests/search-request';
import { SummaryService } from './../../../services/summary.service';
import { DateTime } from './../../../models/date-time';


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-order',
  templateUrl: './recent-order.component.html',
  styleUrls: ['./recent-order.component.css']
})
export class RecentOrderComponent implements OnInit {

  recentOrders: Array<OrderDetails> = null;

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
      this.recentOrders = response.data.data;
    });
  }
  getToStringTime(time: DateTime): string{
    return time.day+'-'+time.month+'-'+time.year+' '+time.hour+':'+time.minute+':'+time.second;
  }

}
