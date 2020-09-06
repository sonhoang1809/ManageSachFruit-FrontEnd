import { GeneralHelperService } from './../../../../services/general-helper.service';
import { InvestService } from './../../InvestService/invest.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Invest } from './../../../../models/invest';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-manage-invest-details',
  templateUrl: './manage-invest-details.component.html',
  styleUrls: ['./manage-invest-details.component.css']
})
export class ManageInvestDetailsComponent implements OnInit {
  public inputFormControl: FormGroup = null;
  //investDetails: Invest = null;
  constructor(private dialogRef: MatDialogRef<ManageInvestDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Invest, private investService: InvestService,
    private formBuilder: FormBuilder, private dialog: MatDialog, public generalService: GeneralHelperService) { }

  ngOnInit(): void {
    if(this.data == null){
      this.inputFormControl = new FormGroup({
        description: new FormControl('', [Validators.required, Validators.maxLength(100)]),
        total: new FormControl('', [Validators.required, Validators.min(1000)])
      });
    }else{
      this.inputFormControl = new FormGroup({
        description: new FormControl(this.data.description, [Validators.required, Validators.maxLength(100)]),
        total: new FormControl(this.data.total, [Validators.required, Validators.min(1000)])
      });
    }
  }
  onUpdateInvest(data, id: string) {
    //console.log(data);
    if (this.inputFormControl.valid) {
      this.generalService.openWaitingPopup();
      this.investService.updateInvest(data, id).subscribe(
        (response) => {
          console.log(response.data);
          this.generalService.closeWaitingPopup();
          this.generalService.handleMessage("Success", response.message);
          this.dialogRef.close(true);
          this.generalService.openCenterPopupMessage('Tổng cộng','Số tiền còn: '
          +new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(response.data.remainMoney));
        },
        (error) => {
          this.generalService.closeWaitingPopup();
          console.log(error);
          this.generalService.handleError(error);
        }
      );
    }else{
      this.generalService.handleErrorInput();
    }
  }

  onStoreInvest(data) {
    if (this.inputFormControl.valid) {
      this.generalService.openWaitingPopup();
      this.investService.storeNewInvest(data).subscribe(
        (response) => {
          console.log(response.data);
          this.generalService.closeWaitingPopup();
          this.generalService.handleMessage("Success", response.message);
          this.dialogRef.close(true);
          this.generalService.openCenterPopupMessage('Tổng cộng','Số tiền còn: '
          +new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(response.data.remainMoney));
        },
        (error) => {
          this.generalService.closeWaitingPopup();
          console.log(error);
          this.generalService.handleError(error);
        }
      );
    }else{
      this.generalService.handleErrorInput();
    }
  }

}
