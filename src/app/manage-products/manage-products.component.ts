import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  titleComponent: string = 'Quản lý danh sách sản phẩm';

  constructor() { }

  ngOnInit(): void {
  }

}
