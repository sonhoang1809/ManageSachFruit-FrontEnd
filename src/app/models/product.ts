import { DateTime } from './../models/date-time';
export interface Product {
    id: string;
    productName: string;
    description: string;
    category: string;
    quantityInStock: number;
    quantityAtBegining: number;
    unit: string;
    unitPrice: number;
    createAt: DateTime;
}
