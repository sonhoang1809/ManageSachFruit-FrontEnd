import { DateTime } from './../../../../models/date-time';
import { GeneralHelperService } from './../../../../services/general-helper.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
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
  public inputFormControl: FormGroup = null;
  costDetails: CostDetails = null;
  costTypeSelected: number;
  costTypes: CostType[] = [];
  constructor(private dialogRef: MatDialogRef<ManageCostDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CostDetails, private costService: CostsService,
    private formBuilder: FormBuilder, private dialog: MatDialog, public generalService: GeneralHelperService) { }

  ngOnInit(): void {
    if (this.data != null) {
      //console.log(this.data);
      this.costService.getDetailsCost(this.data.id).subscribe(
        (response) => {
          //console.log(response);
          this.data = response.data;
          this.costTypeSelected = this.data.costType.id;
          // this.updateForm = this.formBuilder.group({
          //   costDescription: this.data.costDescription,
          //   total: this.data.total,
          //   costTypeId: this.data.costType.id
          // });
          this.inputFormControl = new FormGroup({
            costDescription: new FormControl(this.data.costDescription, [Validators.required, Validators.maxLength(100)]),
            total: new FormControl(this.data.total, [Validators.required, Validators.min(1000)]),
            costTypeId: new FormControl(this.data.costType.id, [Validators.required])
          });
        },
        (error) => {
          this.generalService.handleError(error);
        }
      );
    } else if (this.data == null) {
      // this.inputForm = this.formBuilder.group({
      //   costDescription: '',
      //   total: '',
      //   costTypeId: ''
      // });
      this.inputFormControl = new FormGroup({
        costDescription: new FormControl('', [Validators.required, Validators.maxLength(100)]),
        total: new FormControl('', [Validators.required, Validators.min(1000)]),
        costTypeId: new FormControl('', [Validators.required])
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
    if (this.inputFormControl.valid) {
      this.generalService.openWaitingPopup();
      this.costService.updateCost(data, id).subscribe(
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

  onStoreCost(data) {
    if (this.inputFormControl.valid) {
      this.generalService.openWaitingPopup();
      this.costService.storeNewCost(data).subscribe(
        (response) => {
          this.generalService.closeWaitingPopup();
          this.generalService.handleMessage("Success", response.message);
          this.dialogRef.close(true);
        },
        (error) => {
          this.generalService.closeWaitingPopup();
          console.log(error);
          this.generalService.handleError(error);
        }
      );
    }
  }


}
