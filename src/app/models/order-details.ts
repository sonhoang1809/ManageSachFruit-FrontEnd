import { DateTime } from './date-time';

export interface OrderDetails {
    id: string;
    customerName: string;
    total: number;
    orderTime: string;
    status: string; //= "Delivered";
    createAt: DateTime;
    // public constructor(id: string, customerName: string,total: number, createAt: DateTime) {
    //     this.id = id;
    //     this.customerName = customerName;
    //     this.total = total;
    //     this.createAt= createAt;
    //     this.orderTime = createAt.toString();
    //     this.status = "Delivered";
    // }
}
export interface Order{
    id: string;
    customerName: string;
    total: number;
    //status: string; //= "Delivered";
    createAt: DateTime;
    address: string;
    phone: string;
}

