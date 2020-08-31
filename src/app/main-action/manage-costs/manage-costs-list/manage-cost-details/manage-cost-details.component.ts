import { DateTime } from './../../../../models/date-time';
import { GeneralHelperService } from './../../../../services/general-helper.service';
import { FormBuilder } from '@angular/forms';
import { CostsService } from './../../CostServices/costs.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { CostDetails, CostType } from './../../../../models/cost-details';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-manage-cost-details',
  templateUrl: './manage-cost-details.component.html',
  styleUrls: ['./manage-cost-details.component.css']
})
export class ManageCostDetailsComponent implements OnInit {

  inputForm = null;
  updateForm = null;
  costDetails: CostDetails = null;
  costTypeSelected: number;
  costTypes: CostType[] = [];
  constructor(private dialogRef: MatDialogRef<ManageCostDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CostDetails, private costService: CostsService,
    private formBuilder: FormBuilder, private dialog: MatDialog, private generalService: GeneralHelperService) { }

  ngOnInit(): void {
    if (this.data != null) {
      console.log(this.data);
      this.costService.getDetailsCost(this.data.id).subscribe(
        (response) => {
          console.log(response);
          this.data = response.data;
          this.costTypeSelected = this.data.costType.id;
          this.updateForm = this.formBuilder.group({
            costDescription: this.data.costDescription,
            total: this.data.total,
            costTypeId: this.data.costType.id
          });
        },
        (error) => {
          this.generalService.handleError(error);
        }
      );
    } else if (this.data == null) {
      this.inputForm = this.formBuilder.group({
        costDescription: '',
        total: '',
        costTypeId: ''
      });
    }
    this.costService.getAllCostType().subscribe(
      (response) => {
        this.costTypes = response.data;
      },
      (error) => {
        this.generalService.handleError(error);
      }
    )
  }
  getToStringTime(time: DateTime) {
    return this.generalService.getToStringTime(time);
  }
  onUpdateCost(data, id: string) {
    //console.log(data);
    this.costService.updateCost(data, id).subscribe(
      (response) => {
        this.generalService.handleMessage("Success", response.message);
        this.dialogRef.close(true);
      },
      (error) => {
        console.log(error);
        this.generalService.handleError(error);
      }
    )
  }

  onStoreCost(data) {
    this.costService.storeNewCost(data).subscribe(
      (response) => {
        this.generalService.handleMessage("Success", response.message);
        this.dialogRef.close(true);
      },
      (error) => {
        console.log(error);
        this.generalService.handleError(error);
      }
    );

  }


}
