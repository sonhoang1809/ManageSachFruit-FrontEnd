export class SearchProductRequest {
    limit: number;
    page: number;
    search: string;
    sortField: string;
    sortOrder: number;
    categoryId: string;
    unit: string;
}
