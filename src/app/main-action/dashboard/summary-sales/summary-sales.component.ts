import { GeneralHelperService } from './../../../services/general-helper.service';
import { SummaryService } from './../../../services/summary.service';
import { SummaryFrame } from './../../../models/summary-frame';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-sales',
  templateUrl: './summary-sales.component.html',
  styleUrls: ['./summary-sales.component.css']
})
export class SummarySalesComponent implements OnInit {

  summaryFrames: Array<SummaryFrame> = [];

  constructor(private summaryService: SummaryService, private generalHelper: GeneralHelperService) { }

  ngOnInit(): void {
    this.summaryService.getSummaryNumberOrderInMonth().subscribe(
      (response) => {
        this.summaryFrames.push(
          new SummaryFrame("Số lượng orders trong tháng", response.data.total, response.data.rateCompareToLastTime));
      },
      (error) => {
        this.generalHelper.handleError(error);
      }
    );

    this.summaryService.getSummaryNumberNewCustomerInMonth().subscribe(
      (response) => {
        this.summaryFrames.push(
          new SummaryFrame("Khách mới trong tháng", response.data.total, response.data.rateCompareToLastTime));
      },
      (error) => {
        this.generalHelper.handleError(error);
      }
    );

    this.summaryService.getSummaryNumberCostInMonth().subscribe(
      (response) => {
        this.summaryFrames.push(
          new SummaryFrame("Số lượng chi phí trong tháng", response.data.total, response.data.rateCompareToLastTime));
      },
      (error) => {
        this.generalHelper.handleError(error);
      }
    );

    this.summaryService.getSummaryNumberProductInStockInMonth().subscribe(
      (response) => {
        this.summaryFrames.push(
          new SummaryFrame("Số lượng tồn kho trong tháng", response.data.total, response.data.rateCompareToLastTime));
      },
      (error) => {
        this.generalHelper.handleError(error);
      }
    );
  }

}
