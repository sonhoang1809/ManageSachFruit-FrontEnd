import { Label, Color } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from "chart.js";

export class LineChartModel {
    lineChartData: ChartDataSets[];
    lineChartLabels: Label[] = [];
    lineChartOptions: ChartOptions;
    lineChartColors: Color[];
    lineChartLegend = true;
    lineChartType = 'line';
    lineChartPlugins = [];

    public constructor(lineChartData: ChartDataSets[], lineChartLabels: Label[], lineChartColors: Color[]){

        this.lineChartData = lineChartData;
        this.lineChartLabels = lineChartLabels;
        this.lineChartColors = lineChartColors;
            
    }
}
