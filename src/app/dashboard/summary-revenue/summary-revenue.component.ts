import { SummaryService } from './../../services/summary.service';

import { SummaryFrame } from './../../models/summary-frame';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-summary-revenue',
  templateUrl: './summary-revenue.component.html',
  styleUrls: ['./summary-revenue.component.css']
})
export class SummaryRevenueComponent implements OnInit {

  summaryFrames: Array<SummaryFrame> = [];
  constructor(private summaryService: SummaryService) { }

  ngOnInit(): void {
     
    this.summaryService.getSummaryRevenueInMonth().subscribe(response => {
      this.summaryFrames.push(
        new SummaryFrame("Tổng doanh thu trong tháng", response.data.total, response.data.rateCompareToLastMonth));
    });
    
    this.summaryService.getSummaryCostInMonth().subscribe(response => {
      this.summaryFrames.push(new SummaryFrame("Tổng chi phí trong tháng",response.data.total,response.data.rateCompareToLastMonth));
    });

    this.summaryService.getSummaryProfitInMonth().subscribe(response => {
      this.summaryFrames.push(new SummaryFrame("Tổng lợi nhuận trong tháng",response.data.total,response.data.rateCompareToLastMonth));
    });

    this.summaryService.getSummaryRevenuePerOrderInMonth().subscribe(response=>{
      this.summaryFrames.push(new SummaryFrame("Doanh thu trên mỗi order",response.data.total,response.data.rateCompareToLastMonth));
    });
  
  }

}
