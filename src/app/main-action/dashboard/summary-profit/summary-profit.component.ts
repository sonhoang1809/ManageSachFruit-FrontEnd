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

  statisticsBys = [];
  lineChartModel: LineChartModel = null;
  summaryFrame: SummaryFrame = null;

  constructor(private summaryService: SummaryService, private helper: GeneralHelperService) { }

  ngOnInit(): void {

    this.statisticsBys = [
      { id: 0, display: 'Hằng ngày' },
      { id: 1, display: 'Hằng tháng' },
      { id: 2, display: 'Tất cả' }
    ];
    this.summaryService.getStatisticProfit(0).subscribe(
      (response) => {
        console.log(response);
        this.summaryFrame = new SummaryFrame("Lợi nhuận theo thời gian",response.data.total,response.data.rateCompareToLastTime);
        this.lineChartModel = this.helper.convertToLineChartModel(response.data.chartModel);
        //console.log(this.lineChartModel);
      },
      (error)=>{
        this.helper.handleError(error);
      }
    );
  }

  submit(event: any) {
    this.lineChartModel = null;
    //console.log(event.target.value);
    this.summaryService.getStatisticProfit(event.target.value).subscribe(response => {
      this.lineChartModel = this.helper.convertToLineChartModel(response.data);

    });
  }

  convertToLineChartModel(dataResponse: any): LineChartModel {
    //console.log(dataResponse.dataSetStatistics);
    var chartModel: LineChartModel;
    var lineChartData: ChartDataSets[] = [];
    var lineChartLabels: Label[] = [];
    var lineChartColors: Color[] = [];

    for (var dataSetStatistic of dataResponse.dataSetStatistics) {
      var dataArray = [];
      if (lineChartLabels.length == 0) {
        for (let key in dataSetStatistic.dataSet) {
          lineChartLabels.push(key);
          dataArray.push(dataSetStatistic.dataSet[key]);
        }
      } else {
        for (let key in dataSetStatistic.dataSet) {
          dataArray.push(dataSetStatistic.dataSet[key]);
        }
      }
      lineChartData.push({ data: dataArray, label: dataSetStatistic.label });
    }

    lineChartColors.push(
      {
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
      {
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
      }
    );
    chartModel = {
      chartData: lineChartData,
      chartLabels: lineChartLabels,
      chartColors: lineChartColors,
      chartOptions: {
        responsive: true
      },
      chartLegend: true,
      chartType: 'line',
      chartPlugins: []
    };
    return chartModel;
  }
}
