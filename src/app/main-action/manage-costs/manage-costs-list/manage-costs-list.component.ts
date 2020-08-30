import { SeachCostRequest } from './../../../Requests/search-request';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-costs-list',
  templateUrl: './manage-costs-list.component.html',
  styleUrls: ['./manage-costs-list.component.css']
})
export class ManageCostsListComponent implements OnInit {
  
  searchProductRequest: SeachCostRequest = {
    limit: 5,
    page: 1,
    search: "",
    sortField: "create_at",
    sortOrder: 0,
    costTypeIds: null
  };



  constructor() { }

  ngOnInit(): void {
  }

}
