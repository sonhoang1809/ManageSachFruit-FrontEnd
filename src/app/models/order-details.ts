export class OrderDetails {
    orderId: string;
    customerName: string;
    total: number;
    orderTime: string;
    status: string;
    public constructor(OrderId: string, CustomerName: string,Total: number, OrderTime: string) {
        this.orderId = OrderId;
        this.customerName = CustomerName;
        this.total = Total;
        this.orderTime = OrderTime;
        this.status = "Delivered";
    }
}
