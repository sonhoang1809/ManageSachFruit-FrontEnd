import { DialogExampleComponent } from './../../dialog-example/dialog-example.component';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProductDetailsComponent } from './../product-details/product-details.component';
import { Product, ProductDetails } from './../../models/product';
import { SearchProductRequest } from './../../Requests/search-product-request';
import { SummaryService } from './../../services/summary.service';

import { ResponseSearch } from 'src/app/models/response-search';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-manage-products-list',
  templateUrl: './manage-products-list.component.html',
  styleUrls: ['./manage-products-list.component.css']
})
export class ManageProductsListComponent implements OnInit {

  @Input() productList: ProductDetails[] = [];
  @Input() index: number = 1;
  constructor(private dialog: MatDialog, private service: SummaryService) { }

  showDetail(product: ProductDetails): void{

    this.dialog.open<ProductDetailsComponent>(ProductDetailsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      width: '650px',
      data: product
    });

  }

  ngOnInit(): void {   
   
  }
  
}
