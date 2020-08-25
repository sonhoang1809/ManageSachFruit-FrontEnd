import { Product } from './../../models/product';
import { SearchProductRequest } from './../../Requests/search-product-request';
import { SummaryService } from './../../services/summary.service';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ResponseSearch } from 'src/app/models/response-search';

@Component({
  selector: 'app-manage-products-list',
  templateUrl: './manage-products-list.component.html',
  styleUrls: ['./manage-products-list.component.css']
})
export class ManageProductsListComponent implements OnInit {

  @Input() productList: Product[] = [];
  @Input() index: number=1;
  constructor(private service: SummaryService) { 
    
  }

  
  ngOnInit(): void {   
   
  }
  
}
