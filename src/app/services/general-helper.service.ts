import { CenterPopupMessageComponent } from './../sharings/center-popup-message/center-popup-message.component';
import { WaitingComponent } from './../sharings/waiting/waiting.component';
import { FormGroup } from '@angular/forms';
import { DateTime } from './../models/date-time';
import { LineChartModel, BarChartModel } from './../models/chart-model';
import { MessageComponent } from './../message/message.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { AutofillMonitor } from '@angular/cdk/text-field';

@Injectable({
  providedIn: 'root'
})
export class GeneralHelperService {

  private dialogWaitingPopupRef: MatDialogRef<WaitingComponent>;
  constructor(private dialog: MatDialog) { }

  openCenterPopupMessage(title,message){
    this.dialog.open<CenterPopupMessageComponent>(CenterPopupMessageComponent,{
      disableClose: true,
      data: {title: title,message: message}
    });
  }

  openWaitingPopup(){
    this.dialogWaitingPopupRef = this.dialog.open(WaitingComponent,{
      disableClose: true
    });
  }
  closeWaitingPopup(){
    //this.dialogWaitingPopupRef.getState().
    this.dialogWaitingPopupRef.close();
  }

  hasErrorInputValidation(controlName: string, errorName: string, inputFormControl: FormGroup): boolean{
    return inputFormControl.controls[controlName].hasError(errorName);
  }

  getToStringTime(time: DateTime): string{
    var result="";
    if(time.day<10){
      result = result+'0'+time.day+'-';
    }else{
      result = result+time.day+'-';
    }
    if(time.month<10){
      result = result+'0'+time.month+'-';
    }else{
      result = result+time.month+'-';
    }
    result = result + time.year+' ';
    if(time.hour<10){
      result = result+'0'+time.hour+':';
    }else{
      result = result+time.hour+':';
    }
    if(time.minute<10){
      result = result+'0'+time.minute+':';
    }else{
      result = result+time.minute+':';
    }
    if(time.second<10){
      result=result+'0'+time.second;
    }else{
      result=result+time.second;
    }
    return result;
  }

  convertToLineChartModel(dataResponse: any): LineChartModel {
    //console.log(dataResponse);
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
    }else if(error.status == 400){
      data = {title: 'Error cost: '+error.status, message: error.error.message};
    }
    else if(error.status == 401){
      data = {title: 'Error cost: '+error.status, message: error.statusText};
    }
    else if(error.status == 0){
      data = {title: 'Error code: '+ error.status, message: 'Server Error!!'};
    }
    else{
      data = { title: 'Error code: ' + error.error.statusCode, message: error.error.message };
    }
    
    this.dialog.open(MessageComponent, {
      panelClass: 'myapp-no-padding-dialog',
      disableClose: true,
      height: '210px',
      position: {
        bottom: '50px',
        right: ' 50px'
      },
      data: data
    });
  }
  handleErrorInput(){
    var data = {title: 'Error code: 400', message: 'Value input is error!!'};
    this.dialog.open(MessageComponent, {
      panelClass: 'myapp-no-padding-dialog',
      disableClose: true,
      height: '210px',
      position: {
        bottom: '50px',
        right: ' 50px'
      },
      data: data
    });
  }
  handleSpecificError(error){ 
    this.dialog.open(MessageComponent, {
      panelClass: 'myapp-no-padding-dialog',
      disableClose: true,
      height: '210px',
      position: {
        bottom: '50px',
        right: ' 50px'
      },
      data: error
    });
  }
}
