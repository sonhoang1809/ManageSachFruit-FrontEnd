export interface SearchRequest {
    Limit: number;
    Page: number;
    Search: string;
    SortField: string;
    SortOrder: number;
    //1: descending
    //0: ascending
}
