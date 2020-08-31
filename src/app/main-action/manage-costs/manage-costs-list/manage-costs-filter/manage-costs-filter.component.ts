import { GeneralHelperService } from './../../../../services/general-helper.service';
import { CostType } from './../../../../models/cost-details';
import { CostsService } from './../../CostServices/costs.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-manage-costs-filter',
  templateUrl: './manage-costs-filter.component.html',
  styleUrls: ['./manage-costs-filter.component.css']
})
export class ManageCostsFilterComponent implements OnInit {

  costTypeList: CostType[] = [];
  costTypeIds: number[] = [];
  @Output() selectedCostTypeIds: EventEmitter<number[]> = new EventEmitter<number[]>();
  @Output() description: EventEmitter<string>= new EventEmitter<string>();
  constructor(private costService: CostsService,private generalHelper: GeneralHelperService) { }

  ngOnInit(): void {
    this.costService.getAllCostType().subscribe(
      (response)=>{
        this.costTypeList = response.data;
      },
      (error)=>{
        this.generalHelper.handleError(error);
      }
    )
  }
  onChangeDescription(data){
    this.description.emit(data.target.value);
  }
  selectCostType(id: number){
    if(this.costTypeIds.includes(id)){
      this.costTypeIds.splice(this.costTypeIds.indexOf(id),1);
    }else{
      this.costTypeIds.push(id);
    }
    this.selectedCostTypeIds.emit(this.costTypeIds);
  }

}
