import { ProductsService } from './../products.service';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProductDetailsComponent } from './../product-details/product-details.component';
import { Product, ProductDetails } from './../../models/product';
import { SearchProductRequest } from './../../Requests/search-product-request';
import { SummaryService } from './../../services/summary.service';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-manage-products-list',
  templateUrl: './manage-products-list.component.html',
  styleUrls: ['./manage-products-list.component.css']
})
export class ManageProductsListComponent implements OnInit {

  productList: Product[] = null;

  constructor(private dialog: MatDialog, private service: SummaryService, public productService: ProductsService) {
    //console.log(this.productService.getProductList());
    this.productList = this.productService.getProductList();
    //console.log(this.productList);
    //this.productList = this.productService.getProductList();
  }
  
  ngOnInit(): void {   
    
  }
  

  showDialogProduct(productId: string): void{
    this.dialog.open<ProductDetailsComponent>(ProductDetailsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      width: '650px',
      data: productId
    });
  }

  
}
