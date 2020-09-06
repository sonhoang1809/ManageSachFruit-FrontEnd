import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-manage-invests-filter',
  templateUrl: './manage-invests-filter.component.html',
  styleUrls: ['./manage-invests-filter.component.css']
})
export class ManageInvestsFilterComponent implements OnInit {
  @Output() description: EventEmitter<string>= new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onChangeDescription(data){
    this.description.emit(data.target.value);
  }

}
