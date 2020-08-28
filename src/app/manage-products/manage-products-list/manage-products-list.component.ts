import { GeneralHelperService } from './../../services/general-helper.service';
import { VerifyActionComponent } from './../../verify-action/verify-action.component';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { ProductsService } from './../products.service';
import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { ProductDetailsComponent } from './../product-details/product-details.component';
import { Product, ProductDetails } from './../../models/product';
import { SearchProductRequest } from './../../Requests/search-product-request';
import { SummaryService } from './../../services/summary.service';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-manage-products-list',
  templateUrl: './manage-products-list.component.html',
  styleUrls: ['./manage-products-list.component.css']
})
export class ManageProductsListComponent implements OnInit {

  //displayedColumns: string[] = ['Vi tri', 'name', 'weight', 'symbol'];
  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  //index: number;
  productList: Product[] = null;
  //dataSource= null;

  //@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor(private dialog: MatDialog, private service: SummaryService, public productService: ProductsService,
    private generalHelper: GeneralHelperService) {
    //this.productList = this.productService.getProductList();
    //this.dataSource = new MatTableDataSource<Product>(this.productService.getProductList());
    //this.index = this.productService.getPageInfo().info.page * this.productService.getPageInfo().info.limit;

  }

  ngOnInit(): void {
    //this.dataSource.paginator = this.paginator;
  }


  showDialogProduct(product): void {
    this.dialog.open<ProductDetailsComponent>(ProductDetailsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      width: '650px',
      data: product
    });
  }

  deleteProduct(prod: Product){
    let dialogRef= this.dialog.open(VerifyActionComponent,{
      panelClass: 'myapp-no-padding-dialog',
      width: '300px',
      height: '180px',
      data:{title:'Xác nhận',message:'Bạn có chắc muốn xóa sản phẩm: '+prod.productName}
    });
    dialogRef.afterClosed().subscribe(result=>{
      //console.log(result);
      if(result == true){
        this.productService.deleteProduct(prod.id).subscribe(
          (response)=>{
            this.generalHelper.handleMessage("Success",response.message);
            this.productService.searchProduct(null);
            dialogRef.close();
          },
          (error)=>{
            this.generalHelper.handleError('Error code: '+error.error.statusCode,error.error.message);
            dialogRef.close();
          }
        );
      }
    });
  }

  searchProductSortBy(sort: Sort) {

    if (sort.active != "product_name" 
    && sort.active != "description" 
    && sort.active != "quantity_in_stock" 
    && sort.active != "unit" 
    && sort.active != "unit_price"){
      return;
    }else{
      switch (sort.direction) {
        case "asc": {
          this.productService.searchProductOrderBy(sort.active, 0);
          break;
        };
        case "desc": {
          this.productService.searchProductOrderBy(sort.active, 1);
          break;
        }
        default: {
          this.productService.searchProduct(null);
          break;
        }
      }
    }
      
  }


}
