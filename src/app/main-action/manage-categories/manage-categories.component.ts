import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.css']
})
export class ManageCategoriesComponent implements OnInit {
  titleComponent = "Danh sách các loại sản phẩm";
  constructor() { }

  ngOnInit(): void {
  }

}
