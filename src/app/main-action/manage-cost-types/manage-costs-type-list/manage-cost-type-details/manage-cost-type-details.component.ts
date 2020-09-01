import { CostTypeDetails, CostType } from './../../../../models/cost-details';
import { FormGroup } from '@angular/forms';
import { GeneralHelperService } from './../../../../services/general-helper.service';
import { CostTypeService } from './../../CostTypeService/cost-type.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-manage-cost-type-details',
  templateUrl: './manage-cost-type-details.component.html',
  styleUrls: ['./manage-cost-type-details.component.css']
})
export class ManageCostTypeDetailsComponent implements OnInit {
  //public inputFormControl: FormGroup = null;
  costTypeDetails: CostTypeDetails = null;
  constructor(private dialogRef: MatDialogRef<ManageCostTypeDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number, private costTypeService: CostTypeService, 
    private dialog: MatDialog, public generalService: GeneralHelperService) { }

  ngOnInit(): void {
    this.costTypeService.getDetailsCostType(this.data).subscribe(
      (response)=>{
        this.costTypeDetails = response.data;
      },
      (error)=>{
        this.generalService.handleError(error);
      }
    )
  }

}
