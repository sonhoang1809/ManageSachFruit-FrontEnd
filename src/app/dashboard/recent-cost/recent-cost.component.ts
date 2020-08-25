import { SummaryService } from './../../services/summary.service';
import { CostDetails } from './../../models/cost-details';
import { Component, OnInit } from '@angular/core';
import { SearchRequest } from 'src/app/Requests/search-request';

@Component({
  selector: 'app-recent-cost',
  templateUrl: './recent-cost.component.html',
  styleUrls: ['./recent-cost.component.css']
})
export class RecentCostComponent implements OnInit {

  recentCosts: Array<CostDetails> = [];

  constructor(private summaryService: SummaryService) { }

  ngOnInit(): void {
    var searchCost: SearchRequest = {
      Limit: 5,
      Page: 1,
      Search:"",
      SortField:"",
      SortOrder:""
    };
    this.summaryService.searchCost(searchCost)
    .subscribe( response => {
      for(var data of response.data.data){
        this.recentCosts.push(data);
      }
    });
  }

}
