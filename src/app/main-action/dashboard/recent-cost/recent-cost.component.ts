import { SearchRequest } from './../../../Requests/search-request';
import { CostDetails } from './../../../models/cost-details';
import { SummaryService } from './../../../services/summary.service';

import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-recent-cost',
  templateUrl: './recent-cost.component.html',
  styleUrls: ['./recent-cost.component.css']
})
export class RecentCostComponent implements OnInit {

  recentCosts: Array<CostDetails> = null;

  constructor(private summaryService: SummaryService) { }

  ngOnInit(): void {
    var searchCost: SearchRequest = {
      limit: 5,
      page: 1,
      search: "",
      sortField: "create_at",
      sortOrder: 1
    };
    this.summaryService.searchCost(searchCost)
    .subscribe( response => {
      this.recentCosts = response.data.data;
      //console.log(this.recentCosts);
    });
  }

}
