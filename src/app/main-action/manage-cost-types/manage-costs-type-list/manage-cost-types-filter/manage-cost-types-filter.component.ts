import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-manage-cost-types-filter',
  templateUrl: './manage-cost-types-filter.component.html',
  styleUrls: ['./manage-cost-types-filter.component.css']
})
export class ManageCostTypesFilterComponent implements OnInit {

  @Output() costTypeName: EventEmitter<string>= new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }
  onChangeName(data){
    this.costTypeName.emit(data.target.value);
  }

}
