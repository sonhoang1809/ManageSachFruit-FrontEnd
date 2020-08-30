import { ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';
export interface LineChartModel {
    chartData: ChartDataSets[];
    chartLabels: Label[];
    chartOptions: ChartOptions;
    chartColors: Color[];
    chartLegend: boolean;
    chartType: ChartType;
    chartPlugins:[];
}
export interface BarChartModel {

    chartData: ChartDataSets[];
    chartLabels: Label[];
    chartOptions: ChartOptions;
    chartColors: Color[];
    chartLegend: boolean;
    chartType: ChartType;
    chartPlugins:[];
}

