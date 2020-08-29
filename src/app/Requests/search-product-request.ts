export class SearchProductRequest {
    limit: number;
    page: number;
    search: string;
    sortField: string;
    sortOrder: number;
    categoryIds: string[];
    units: string[];
}
