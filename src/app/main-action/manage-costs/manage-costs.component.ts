import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-costs',
  templateUrl: './manage-costs.component.html',
  styleUrls: ['./manage-costs.component.css']
})
export class ManageCostsComponent implements OnInit {

  titleComponent: string = 'Quản lý danh sách chi phí';
  
  constructor() { }

  ngOnInit(): void {
  }

}
