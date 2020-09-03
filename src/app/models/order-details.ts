import { DateTime } from './date-time';

export interface OrderDetails {
    id: string;
    customerName: string;
    address: string;
    phone: string;
    total: number;
    shipCost: number;
    createAt: DateTime;
    productsDetailsInOrder: ProductsDetailsInOrder[];
}
export interface ProductsDetailsInOrder{
    id: string;
    productName: string;
    description: string;
    quantity: number;
    unitPrice: number;
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

