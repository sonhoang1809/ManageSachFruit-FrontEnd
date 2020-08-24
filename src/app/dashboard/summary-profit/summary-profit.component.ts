import { SummaryFrame } from './../../models/summary-frame';
import { LineChartModel } from './../../models/line-chart-model';
import { GeneralHelperService } from './../../services/general-helper.service';
import { SummaryService } from './../../services/summary.service';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-summary-profit',
  templateUrl: './summary-profit.component.html',
  styleUrls: ['./summary-profit.component.css']
})
export class SummaryProfitComponent implements OnInit {

  statisticsBys= [];
  lineChartModel: LineChartModel = null;
  summaryFrame: SummaryFrame;

  constructor(private summaryService: SummaryService, private helper: GeneralHelperService) { }

  ngOnInit(): void {

    this.statisticsBys=[
      {id:0, display:'Hằng ngày'},
      {id:1, display:'Hằng tháng'},
      {id:2, display:'Tất cả'}
    ]
    this.summaryService.getStatisticProfit(0).subscribe(response => {
      this.lineChartModel = this.convertToLineChartModel(response.data);
    });
  }

  submit(event: any){
    //console.log(event.target.value);
    this.summaryService.getStatisticProfit(event.target.value).subscribe(response=>{
      this.lineChartModel = this.convertToLineChartModel(response.data);
    });
  }

  convertToLineChartModel(dataResponse: any){
    console.log(dataResponse);
    var lineChartData: ChartDataSets[] = [];
    var lineChartLabels: Label[] = [];
    var lineChartColors: Color[] = [];
    this.summaryFrame = new SummaryFrame("Biểu đồ lợi nhuận", dataResponse.total,
    dataResponse.rateCompareToLastTime);
      var dataArray = [];   
      for(let key in dataResponse.dataSet){        
        lineChartLabels.push(key);

        dataArray.push(dataResponse.dataSet[key]);
      }            
      lineChartData.push({data: dataArray,label: dataResponse.label});
    

    lineChartColors.push(
        {
          //backgroundColor: '#dffaff',
          borderColor: '#25d5f2',
        }
      );
      // console.log("lineChartData:"+lineChartData);
      // console.log("lineChartLabels:"+lineChartLabels);
      // console.log("lineChartColors:"+lineChartColors);
    return new LineChartModel(lineChartData, lineChartLabels, lineChartColors);    
  }
}
