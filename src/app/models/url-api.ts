
//export const UrlServer = "http://localhost:9000";
export const UrlServer = "https://managesachfruits-backend.herokuapp.com";
 

export const Proxy = "https://cors-anywhere.herokuapp.com/";
export const UrlGetAllCity = Proxy+"https://thongtindoanhnghiep.co/api/city";
export const UrlGetAllDistrictInCity = Proxy+"https://thongtindoanhnghiep.co/api/city";
export const UrlGetAllWardInDistrict = Proxy+"https://thongtindoanhnghiep.co/api/district";






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


export const UrlServerAPIProduct = UrlServer+'/api/Products';

export const UrlServerAPIGetProductsOfCategory = UrlServer+'/api/Products/Category';

export const UrlServerAPICost = UrlServer+'/api/Costs';

export const UrlServerAPIOrder = UrlServer+'/api/Orders';

export const UrlServerAPICostType = UrlServer+'/api/CostTypes';
export const UrlServerAPISearchCostType = UrlServer+'/api/CostTypes/Search';


export const UrlServerAPIInvest = UrlServer+'/api/Invests';
export const UrlServerAPISearchInvest = UrlServer+'/api/Invests/Search';
