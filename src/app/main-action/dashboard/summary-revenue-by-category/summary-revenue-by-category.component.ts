import { GeneralHelperService } from './../../../services/general-helper.service';
import { SummaryService } from './../../../services/summary.service';
import { BarChartModel } from './../../../models/chart-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-revenue-by-category',
  templateUrl: './summary-revenue-by-category.component.html',
  styleUrls: ['./summary-revenue-by-category.component.css']
})
export class SummaryRevenueByCategoryComponent implements OnInit {

  barChartModel: BarChartModel = null;
  statisticsBys = [];

  constructor(private summaryService: SummaryService,
    private generalHelper: GeneralHelperService) { }

  ngOnInit(): void {
    this.statisticsBys = [
      { id: 0, display: 'Hằng ngày' },
      { id: 1, display: 'Hằng tháng' },
      { id: 2, display: 'Tất cả' }
    ];

    this.summaryService.getStatisticRevenueByCategory(0).subscribe(
      (response) => {
        //console.log(response);
        this.barChartModel = this.generalHelper.convertToBarChartModel(response.data);
      },
      (error)=>{
        this.generalHelper.handleError(error);
      }
    );
  }
  submit(event: any) {
    this.barChartModel = null;
    //console.log(event.target.value);
    // this.summaryService.getStatisticRevenueCost(event.target.value).subscribe(response=>{
    //   this.lineChartModel = this.generalHelper.convertToLineChartModel(response.data);
    // });
  }

}
