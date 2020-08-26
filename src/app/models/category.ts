import { DateTime } from './date-time';
export interface Category {
    id: string;
    categoryName: string;
    createAt: DateTime;
    updateAt: DateTime;
}
