import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-invests',
  templateUrl: './manage-invests.component.html',
  styleUrls: ['./manage-invests.component.css']
})
export class ManageInvestsComponent implements OnInit {
  titleComponent: string = 'Quản lý vốn đầu tư';
  constructor() { }

  ngOnInit(): void {
  }

}
