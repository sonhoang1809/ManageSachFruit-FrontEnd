import { ProductsService } from './../manage-products/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  titleComponent: string = 'E-commerce Dashboard';

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
  }

}
