import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-cost-types',
  templateUrl: './manage-cost-types.component.html',
  styleUrls: ['./manage-cost-types.component.css']
})
export class ManageCostTypesComponent implements OnInit {
  titleComponent: string = 'Quản lý danh sách các loại chi phí';
  constructor() { }

  ngOnInit(): void {
  }

}
