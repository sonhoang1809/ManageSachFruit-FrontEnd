import { MessageComponent } from './../message/message.component';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { LineChartModel } from '../models/line-chart-model';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Injectable({
  providedIn: 'root'
})
export class GeneralHelperService {

  constructor(private dialog: MatDialog) { }
  
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
  handleMessage(title,message) {
    this.dialog.open(MessageComponent, {
      panelClass: 'myapp-no-padding-dialog',
      position: {
        bottom: '50px',
        right: ' 50px'
      },
      data: {title: title, message: message}
    });
  }

  handleError(titleCodeError, message) {
    this.dialog.open(MessageComponent, {
      panelClass: 'myapp-no-padding-dialog',
      position: {
        bottom: '50px',
        right: ' 50px'
      },
      data: {title: titleCodeError, message: message}
    });
  }
}
