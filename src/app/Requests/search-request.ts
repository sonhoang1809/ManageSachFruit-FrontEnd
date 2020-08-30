export interface SearchRequest {
    limit: number;
    page: number;
    search: string;
    sortField: string;
    sortOrder: number;
    //1: descending
    //0: ascending
}
export interface SeachCostRequest{
    limit: number;
    page: number;
    search: string;
    sortField: string;
    sortOrder: number;
    costTypeIds: [];
}
