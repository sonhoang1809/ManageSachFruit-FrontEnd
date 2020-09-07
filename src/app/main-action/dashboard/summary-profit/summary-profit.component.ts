import { LineChartModel } from './../../../models/chart-model';
import { SummaryService } from './../../../services/summary.service';
import { GeneralHelperService } from './../../../services/general-helper.service';
import { SummaryFrame } from './../../../models/summary-frame';

import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-summary-profit',
  templateUrl: './summary-profit.component.html',
  styleUrls: ['./summary-profit.component.css']
})
export class SummaryProfitComponent implements OnInit {

  statisticsBys = [
    { id: 0, display: 'Hằng ngày' },
    { id: 1, display: 'Hằng tháng' }
  ];
  selected = this.statisticsBys[0].id;
  lineChartModel: LineChartModel = null;
  summaryFrame: SummaryFrame = null;

  constructor(private summaryService: SummaryService, private generalHelper: GeneralHelperService) { }

  ngOnInit(): void {
    this.summaryService.getStatisticProfit(0).subscribe(
      (response) => {
        //console.log(response);
        this.summaryFrame = new SummaryFrame("Lợi nhuận theo thời gian", response.data.total, response.data.rateCompareToLastTime);
        this.lineChartModel = this.generalHelper.convertToLineChartModel(response.data.chartModel);
        //console.log(this.lineChartModel);
      },
      (error) => {
        this.generalHelper.handleError(error);
      }
    );
  }

  submit(event: any) {
    this.lineChartModel = null;
    this.summaryService.getStatisticProfit(event.value).subscribe(
      (response) => {
        this.summaryFrame = new SummaryFrame("Lợi nhuận theo thời gian", response.data.total, response.data.rateCompareToLastTime);
        this.lineChartModel = this.generalHelper.convertToLineChartModel(response.data.chartModel);
      },
      (error) => {
        this.generalHelper.handleError(error);
      }
    );
  }
}
