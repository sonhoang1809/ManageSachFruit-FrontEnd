import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { ProductDetailsComponent } from './main-action/manage-products/manage-products-list/product-details/product-details.component';
import { ManageProductsFilterComponent } from './main-action/manage-products/manage-products-list/manage-products-filter/manage-products-filter.component';

import { VerifyActionComponent } from './main-action/verify-action/verify-action.component';
import { DialogExampleComponent } from './main-action/dialog-example/dialog-example.component';

import { ManageProductsComponent } from './main-action/manage-products/manage-products.component';
import { ManageProductsListComponent } from './main-action/manage-products/manage-products-list/manage-products-list.component';
import { SummaryProfitComponent } from './main-action/dashboard/summary-profit/summary-profit.component';
import { SummaryOrderCostChartComponent } from './main-action/dashboard/summary-order-cost-chart/summary-order-cost-chart.component';
import { RecentCostComponent } from './main-action/dashboard/recent-cost/recent-cost.component';
import { SummarySalesByComponent } from './main-action/dashboard/summary-sales-by/summary-sales-by.component';
import { SummarySalesComponent } from './main-action/dashboard/summary-sales/summary-sales.component';
import { TopPerformingComponent } from './main-action/dashboard/top-performing/top-performing.component';
import { ProductSalesComponent } from './main-action/dashboard/product-sales/product-sales.component';
import { ProductCategoryComponent } from './main-action/dashboard/product-category/product-category.component';
import { CustomerAcquisitionComponent } from './main-action/dashboard/customer-acquisition/customer-acquisition.component';
import { RecentOrderComponent } from './main-action/dashboard/recent-order/recent-order.component';
import { SummaryRevenueComponent } from './main-action/dashboard/summary-revenue/summary-revenue.component';
import { PageHeaderContentComponent } from './main-action/page-header-content/page-header-content.component';
import { FooterComponent } from './main-action/footer/footer.component';
import { DashboardComponent } from './main-action/dashboard/dashboard.component';
import { HeaderComponent } from './main-action/header/header.component';
import { SideBarComponent } from './main-action/side-bar/side-bar.component';
import { DoughnutChartComponent } from './main-action/charts/doughnut-chart/doughnut-chart.component';
import { PieChartComponent } from './main-action/charts/pie-chart/pie-chart.component';
import { BarChartComponent } from './main-action/charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './main-action/charts/line-chart/line-chart.component';
import { MessageComponent } from './message/message.component';
import { MainActionComponent } from './main-action/main-action.component';

import { SummaryService } from './services/summary.service';
import { ProductsService } from './main-action/manage-products/ProductServices/products.service';
//import { HandleError } from './supports/handle-error';

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';

import { LoginComponent } from './login/login.component';

import { ChartsModule } from 'ng2-charts';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';



import { SummaryRevenueByCategoryComponent } from './main-action/dashboard/summary-revenue-by-category/summary-revenue-by-category.component';
import { ManageCostsComponent } from './main-action/manage-costs/manage-costs.component';
import { ManageCostsListComponent } from './main-action/manage-costs/manage-costs-list/manage-costs-list.component';
import { ManageCostDetailsComponent } from './main-action/manage-costs/manage-costs-list/manage-cost-details/manage-cost-details.component';
import { ManageCostsFilterComponent } from './main-action/manage-costs/manage-costs-list/manage-costs-filter/manage-costs-filter.component';
import { WaitingComponent } from './sharings/waiting/waiting.component';
import { ManageCostTypesComponent } from './main-action/manage-cost-types/manage-cost-types.component';
import { ManageCostsTypeListComponent } from './main-action/manage-cost-types/manage-costs-type-list/manage-costs-type-list.component';
import { ManageCostTypeDetailsComponent } from './main-action/manage-cost-types/manage-costs-type-list/manage-cost-type-details/manage-cost-type-details.component';
import { ManageCostTypesFilterComponent } from './main-action/manage-cost-types/manage-costs-type-list/manage-cost-types-filter/manage-cost-types-filter.component';
import { SummaryCostTypeComponent } from './main-action/dashboard/summary-cost-type/summary-cost-type.component';
import { ManageOrdersComponent } from './main-action/manage-orders/manage-orders.component';
import { ManageOrdersListComponent } from './main-action/manage-orders/manage-orders-list/manage-orders-list.component';
import { ManageOrderDetailsComponent } from './main-action/manage-orders/manage-orders-list/manage-order-details/manage-order-details.component';
import { ManageOrderFiltersComponent } from './main-action/manage-orders/manage-orders-list/manage-order-filters/manage-order-filters.component';
import { OrderCreateComponent } from './main-action/manage-orders/order-create/order-create.component';
import { OrderUpdateComponent } from './main-action/manage-orders/order-update/order-update.component';
import { DialogAddProductInOrderComponent } from './main-action/manage-orders/order-create/dialog-add-product-in-order/dialog-add-product-in-order.component';




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
    SummaryProfitComponent,
    ManageProductsComponent,
    ManageProductsFilterComponent,
    ManageProductsListComponent,
    ProductDetailsComponent,
    MessageComponent,
    DialogExampleComponent,
    VerifyActionComponent,
    MainActionComponent,
    SummaryRevenueByCategoryComponent,
    ManageCostsComponent,
    ManageCostsListComponent,
    ManageCostDetailsComponent,
    ManageCostsFilterComponent,
    WaitingComponent,
    ManageCostTypesComponent,
    ManageCostsTypeListComponent,
    ManageCostTypeDetailsComponent,
    ManageCostTypesFilterComponent,
    SummaryCostTypeComponent,
    ManageOrdersComponent,
    ManageOrdersListComponent,
    ManageOrderDetailsComponent,
    ManageOrderFiltersComponent,
    OrderCreateComponent,
    OrderUpdateComponent,
    DialogAddProductInOrderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatExpansionModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      {
        path: 'main', component: MainActionComponent, children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: DashboardComponent },
          { path: 'products', component: ManageProductsComponent },
          { path: 'costs', component: ManageCostsComponent },
          { path: 'cost-types', component: ManageCostTypesComponent },
          {
            path: 'orders', component: ManageOrdersComponent, children: [
              { path: '', redirectTo: 'order-list', pathMatch: 'prefix' },
              { path: 'order-list', component: ManageOrdersListComponent },
              { path: 'order-create', component: OrderCreateComponent }
            ]
          }

        ]
      }
      //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      //{path: 'dashboard', component: DashboardComponent},
      //{ path: 'manageProduct/products', component: ManageProductsComponent }
    ]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    ProductsService,
    SummaryService,
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
