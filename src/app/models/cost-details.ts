import { DateTime } from './date-time';
export interface CostDetails {
    id: string;
    costCode: string;
    costDescription: string;
    total: number;
    costTime: string;
    createAt: DateTime;
    updateAt: DateTime;
    // public constructor(OrderId: string, CostDescription: string, Total: number, CostCode: string) {
    //     this.costId = OrderId;
    //     this.costDescription = CostDescription;
    //     this.total = Total;
    //     this.costCode = CostCode;
    // }
}
