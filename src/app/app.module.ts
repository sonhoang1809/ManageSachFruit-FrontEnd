import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { PageHeaderContentComponent } from './dashboard/page-header-content/page-header-content.component';
import { SummaryRevenueComponent } from './dashboard/summary-revenue/summary-revenue.component';
import { RecentOrderComponent } from './dashboard/recent-order/recent-order.component';
import { CustomerAcquisitionComponent } from './dashboard/customer-acquisition/customer-acquisition.component';
import { ProductCategoryComponent } from './dashboard/product-category/product-category.component';
import { ProductSalesComponent } from './dashboard/product-sales/product-sales.component';
import { TopPerformingComponent } from './dashboard/top-performing/top-performing.component';
import { SummarySalesComponent } from './dashboard/summary-sales/summary-sales.component';
import { SummarySalesByComponent } from './dashboard/summary-sales-by/summary-sales-by.component';
import { RecentCostComponent } from './dashboard/recent-cost/recent-cost.component';
import { SummaryOrderCostChartComponent } from './dashboard/summary-order-cost-chart/summary-order-cost-chart.component';
import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { DoughnutChartComponent } from './charts/doughnut-chart/doughnut-chart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SummaryProfitComponent } from './dashboard/summary-profit/summary-profit.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SideBarComponent,
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    PageHeaderContentComponent,
    SummaryRevenueComponent,
    RecentOrderComponent,
    CustomerAcquisitionComponent,
    ProductCategoryComponent,
    ProductSalesComponent,
    TopPerformingComponent,
    SummarySalesComponent,
    SummarySalesByComponent,
    RecentCostComponent,
    SummaryOrderCostChartComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
    DoughnutChartComponent,
    SummaryProfitComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
