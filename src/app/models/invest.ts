import { DateTime } from './date-time';
export interface Invest{
    id: string;
    description: string;
    total: number;
    createAt: DateTime;
    updateAt: DateTime;

}