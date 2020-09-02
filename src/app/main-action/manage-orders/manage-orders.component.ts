import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {
  titleComponent: string = 'Quản lý danh sách orders';
  constructor() { }

  ngOnInit(): void {
  }

}
