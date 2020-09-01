import { HttpHeaders, HttpParams } from '@angular/common/http';

//export const UrlServer = "http://localhost:9000";
export const UrlServer = "https://managesachfruits-backend.herokuapp.com";
 



export const UrlServerAPIGetRemainMoney = UrlServer+'/api/Moneys/SummaryRemainMoney';
export const UrlServerAPISummaryRevenueInMonth = UrlServer+'/api/Moneys/SummaryRevenuesInMonth';
export const UrlServerAPISummaryCostInMonth = UrlServer+'/api/Moneys/SummaryCostsInMonth';
export const UrlServerAPISummaryProfitInMonth = UrlServer+'/api/Moneys/SummaryProfitsInMonth';
export const UrlServerAPISummaryRevenuePerOrderInMonth = UrlServer+'/api/Moneys/SummaryRevenuePerOrderInMonth';


export const UrlServerAPISummaryNumberOrderInMonth = UrlServer+'/api/orders/NumberOrder';
export const UrlServerAPISummaryNumberCostInMonth = UrlServer+'/api/costs/NumberCost';
export const UrlServerAPISummaryNumberProductInStockInMonth = UrlServer+'/api/products/ProductInStockInMonth';
export const UrlServerAPIStatisticsRevenueCost = UrlServer+'/api/Moneys/Statistics/Revenue/Cost';
export const UrlServerAPIStatisticsProfit = UrlServer+'/api/Moneys/Statistics/SummaryProfits';
export const UrlServerAPIStatisticsRevenueByCategory = UrlServer+'/api/Moneys/Statistics/Revenue/Category';
export const UrlServerAPIStatisticsCostType = UrlServer+'/api/Moneys/Statistics/CostTypes';


export const UrlServerAPISearchOrder = UrlServer+'/api/Orders/Search';
export const UrlServerAPISearchCost = UrlServer+'/api/Costs/Search';
export const UrlServerAPISearchProduct = UrlServer+'/api/Products/Search';

export const UrlServerAPIGetAllCategory = UrlServer+'/api/Categories';

export const UrlServerAPIGetAllUnits = UrlServer+'/api/Products/Units';


export const UrlServerAPIStoreNewProduct = UrlServer+'/api/Products';
export const UrlServerAPIGetDetailsProduct = UrlServer+'/api/Products';
export const UrlServerAPIUpdateProduct = UrlServer+'/api/Products';
export const UrlServerAPIDeleteProduct = UrlServer+'/api/Products';

export const UrlServerAPICost = UrlServer+'/api/Costs';

export const UrlServerAPICostType = UrlServer+'/api/CostTypes';
export const UrlServerAPISearchCostType = UrlServer+'/api/CostTypes/Search';

export interface Options{
    headers?: HttpHeaders | {[header: string]: string | string[]},
    observe?: 'body' | 'events' | 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType: 'json',
    withCredentials?: boolean,
}