import { Category } from './category';
import { DateTime } from './../models/date-time';
import { CostDetails } from './cost-details';
export interface Product {
    id: string;
    productName: string;
    description: string;
    categoryId: string;
    costId: string;
    quantityInStock: number;
    quantityAtBegining: number;
    unit: string;
    unitPrice: number;
    createAt: DateTime;
    updateAt: DateTime;
}

export interface ProductDetails {
    id: string;
    productName: string;
    description: string;
    quantityInStock: number;
    quantityAtBegining: number;
    categoryId: string;
    unit: string;
    unitPrice: number;
    createAt: DateTime;
    cost: CostDetails;
    category: Category;
}
export interface StoreProductRequest{
    productName: string;
    description: string;
    quantityInStock: number;
    unit: string;
    unitPrice: number;
    categoryId: string;
    importPrice: number;
}