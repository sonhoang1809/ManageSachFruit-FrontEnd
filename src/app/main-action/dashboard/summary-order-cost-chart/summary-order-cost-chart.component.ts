import { LineChartModel } from './../../../models/chart-model';
import { SummaryService } from './../../../services/summary.service';

import { GeneralHelperService } from './../../../services/general-helper.service';

import { Label, Color } from 'ng2-charts';
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

  //form: FormGroup;
  statisticsBys =[
    {id:0, display:'Hằng ngày'},
    {id:1, display:'Hằng tháng'},
    {id:2, display:'Tất cả'}
  ];
  selected = this.statisticsBys[0].id;
  lineChartModel: LineChartModel = null;

  constructor(private formBuilder: FormBuilder, private summaryService: SummaryService,
    private generalHelper: GeneralHelperService) { }

  ngOnInit(): void {

    // this.form = this.formBuilder.group({
    //   statisticsBys:['']
    // });
    
    this.statisticsBys=[
      {id:0, display:'Hằng ngày'},
      {id:1, display:'Hằng tháng'},
      {id:2, display:'Tất cả'}
    ]

    this.summaryService.getStatisticRevenueCost(0).subscribe( response=> {
      this.lineChartModel = this.generalHelper.convertToLineChartModel(response.data);
    });

  }

  submit(event: any){

    //console.log(event);
    this.lineChartModel = null;
    console.log(event.target.value);
    this.summaryService.getStatisticRevenueCost(event.value).subscribe(response=>{
      this.lineChartModel = this.generalHelper.convertToLineChartModel(response.data);
    });
  }

}
