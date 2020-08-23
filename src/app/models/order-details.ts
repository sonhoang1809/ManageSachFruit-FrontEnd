export class OrderDetails {
    OrderId: string;
    CustomerName: string;
    Total: number;
    OrderTime: string;
    Status: string;
    public constructor(OrderId: string, CustomerName: string,Total: number, OrderTime: string) {
        this.OrderId = OrderId;
        this.CustomerName = CustomerName;
        this.Total = Total;
        this.OrderTime = OrderTime;
        this.Status = "Delivered";
    }
}
