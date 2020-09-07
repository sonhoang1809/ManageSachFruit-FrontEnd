import { GeneralHelperService } from './../../../services/general-helper.service';
import { OrderDetails, Order } from './../../../models/order-details';
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

  recentOrders: Array<Order> = null;

  constructor(private summaryService: SummaryService, private generalHelper: GeneralHelperService) { }

  ngOnInit(): void {
    var searchOrder: SearchRequest = {
      limit: 5,
      page: 1,
      search: "",
      sortField: "create_at",
      sortOrder: 1
    };

    this.summaryService.searchOrder(searchOrder)
      .subscribe(
        (response) => {
          this.recentOrders = response.data.data;
        },
        (error) => {
          this.generalHelper.handleError(error);
        }
      );
  }
  getToStringTime(time: DateTime): string {
    return this.generalHelper.getToStringTime(time);
  }

}
