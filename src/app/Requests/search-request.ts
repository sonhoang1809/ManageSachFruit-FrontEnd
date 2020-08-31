export interface SearchRequest {
    limit: number;
    page: number;
    search: string;
    sortField: string;
    sortOrder: number;
    //1: descending
    //0: ascending
}
export interface SearchCostRequest{
    limit: number;
    page: number;
    search: string;
    sortField: string;
    sortOrder: number;
    costTypeIds: string[];
}
