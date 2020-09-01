import { GeneralHelperService } from './../../../services/general-helper.service';
import { BarChartModel } from './../../../models/chart-model';
import { SummaryService } from './../../../services/summary.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-summary-cost-type',
  templateUrl: './summary-cost-type.component.html',
  styleUrls: ['./summary-cost-type.component.css']
})
export class SummaryCostTypeComponent implements OnInit {


  statisticsBys =[
    {id:0, display:'Hằng ngày'},
    {id:1, display:'Hằng tháng'}
  ];
  selected = this.statisticsBys[0].id;
  barChartModel: BarChartModel = null;
  constructor(private summaryService: SummaryService,private generalHelper: GeneralHelperService) { }

  ngOnInit(): void {
    this.summaryService.getStatisticCostType(0).subscribe( response=> {
      this.barChartModel = this.generalHelper.convertToBarChartModel(response.data);
    });
  }
  submit(event: any){

    //console.log(event);
     this.barChartModel = null;
    // console.log(event.target.value);
    this.summaryService.getStatisticCostType(event.value).subscribe(response=>{
      this.barChartModel = this.generalHelper.convertToBarChartModel(response.data);
    });
  }

}
