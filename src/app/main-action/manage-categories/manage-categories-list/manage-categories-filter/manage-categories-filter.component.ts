import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-manage-categories-filter',
  templateUrl: './manage-categories-filter.component.html',
  styleUrls: ['./manage-categories-filter.component.css']
})
export class ManageCategoriesFilterComponent implements OnInit {
  @Output() categoryName: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  onChangeCategoryName(data) {
    this.categoryName.emit(data.target.value);
  }

}
