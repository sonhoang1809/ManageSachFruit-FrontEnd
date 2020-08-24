import { LineChartModel } from './../../models/line-chart-model';
import { Label, Color } from 'ng2-charts';
import { SummaryService } from './../../services/summary.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn
} from '@angular/forms';
import { ChartDataSets } from 'chart.js';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-summary-order-cost-chart',
  templateUrl: './summary-order-cost-chart.component.html',
  styleUrls: ['./summary-order-cost-chart.component.css']
})
export class SummaryOrderCostChartComponent implements OnInit {

  form: FormGroup;
  statisticsBys= [];
  
  lineChartModel: LineChartModel = null;

  constructor(private formBuilder: FormBuilder, private summaryService: SummaryService) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      statisticsBys:['']
    });

    this.statisticsBys=[
      {id:0, display:'Daily'},
      {id:1, display:'Monthly'},
      {id:2, display:'Yearly'}
    ]


    this.summaryService.getStatisticRevenueCost(0).subscribe(response=>{
      this.lineChartModel = this.convertToLineChartModel(response.data);
    });

  }

  convertToLineChartModel(dataResponse: any){
    var lineChartData: ChartDataSets[] = [];
    var lineChartLabels: Label[] = [];
    var lineChartColors: Color[] = [];

    for(var dataSetStatistic of dataResponse.dataSetStatistics){
      var dataArray = [];
      if(lineChartLabels.length == 0){
        for(let key in dataSetStatistic.dataSet){        
          lineChartLabels.push(key);
          dataArray.push(dataSetStatistic.dataSet[key]);
        }      
      }else{
        for(let key in dataSetStatistic.dataSet){
          dataArray.push(dataSetStatistic.dataSet[key]);
        }
      }
      lineChartData.push({data: dataArray,label: dataSetStatistic.label});
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
      // console.log("lineChartData:"+lineChartData);
      // console.log("lineChartLabels:"+lineChartLabels);
      // console.log("lineChartColors:"+lineChartColors);
    return new LineChartModel(lineChartData,lineChartLabels,lineChartColors);    
  }

  submit(event: any){
    //console.log(event.target.value);
    this.summaryService.getStatisticRevenueCost(event.target.value).subscribe(response=>{
      this.lineChartModel = this.convertToLineChartModel(response.data);
    });


  }

}
