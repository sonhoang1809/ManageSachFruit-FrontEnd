import { LineChartModel, BarChartModel } from './../models/chart-model';
import { MessageComponent } from './../message/message.component';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { AutofillMonitor } from '@angular/cdk/text-field';

@Injectable({
  providedIn: 'root'
})
export class GeneralHelperService {

  constructor(private dialog: MatDialog) { }

  convertToLineChartModel(dataResponse: any): LineChartModel {
    var chartModel: LineChartModel;
    var lineChartData: ChartDataSets[] = dataResponse.dataSets;
    var lineChartLabels: Label[] = dataResponse.chartLabel;
    var lineChartColors: Color[] = [];

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
  convertToBarChartModel(dataResponse: any): BarChartModel {
    //console.log(dataResponse);
    var chartModel: BarChartModel;
    var barChartData: ChartDataSets[] = dataResponse.dataSets;
    var barChartLabels: Label[] = dataResponse.chartLabel;
    var barChartColors: Color[] = [];

    barChartColors.push(
      
      {
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
      },
      {
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
      }
    );
    chartModel = {
      chartData: barChartData,
      chartLabels: barChartLabels,
      chartColors: barChartColors,
      chartOptions: {
        responsive: true,
        
      },
      chartLegend: true,
      chartType: 'bar',
      chartPlugins: []
    };
    return chartModel; 
  }
  handleMessage(title, message) {
    this.dialog.open(MessageComponent, {
      panelClass: 'myapp-no-padding-dialog',
      position: {
        bottom: '50px',
        right: ' 50px'
      },
      data: { title: title, message: message }
    });
  }

  handleError(error) {
    console.log(error);
    var data;
    if(error.status == 404){
      data = {title: 'Error code: ' + error.status, message: error.statusText};
    }else{
      data = { title: 'Error code: ' + error.error.statusCode, message: error.error.message };
    }
    this.dialog.open(MessageComponent, {
      panelClass: 'myapp-no-padding-dialog',
      height: '210px',
      position: {
        bottom: '50px',
        right: ' 50px'
      },
      data: data
    });
  }
}
