import { LineChartModel } from './../../../models/line-chart-model';
import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {



  @Input() lineChartModel: LineChartModel;
  
  lineChartData: ChartDataSets[];
  lineChartLabels: Label[];
  lineChartColors: Color[];

  constructor() {
    console.log(this.lineChartModel);
   }

  ngOnInit(): void {
  }
  
  // Array of different segments in chart
  //lineChartData: ChartDataSets[] = [
  //  { data: [65, 59, 80, 81, 56, 55, 40, 81, 65, 59, 80, 81], label: 'Revenue' },
  //  { data: [28, 48, 40, 19, 86, 27, 90, 86, 28, 48, 40, 19], label: 'Cost' }
  //];

  //Labels shown on the x-axis
  //lineChartLabels: Label[] = 
  //['January', 'February', 'March', 
  //'April', 'May', 'June', 'July', 
  //'August', 'September', 'October', 
  //'November', 'December'];

  // Define chart options
  lineChartOptions: ChartOptions = {
    responsive: true
  };

  // Define colors of chart segments
  // lineChartColors: Color[] = [

  //   {
  //     backgroundColor: 'rgba(255, 99, 132, 0.2)',
  //     borderColor: 'rgba(255, 99, 132, 1)',
  //   },
  //   {
  //     backgroundColor: 'rgba(54, 162, 235, 0.2)',
  //     borderColor: 'rgba(54, 162, 235, 1)',
  //   }
  // ];

  // Set true to show legends
  lineChartLegend = true;

  // Define type of chart
  lineChartType = 'line';

  lineChartPlugins = [];

  // events
  chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
    //this.refreshData();
  }

  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  refreshData() {
    this.lineChartData[1].data = [28, 48, 140, 19, 86, 27, 90]
  }

}
