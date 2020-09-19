import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GeneralHelperService } from './../../../../services/general-helper.service';
import { CategoriesService } from './../../CategoryService/categories.service';
import { Category } from './../../../../models/category';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-manage-category-details',
  templateUrl: './manage-category-details.component.html',
  styleUrls: ['./manage-category-details.component.css']
})
export class ManageCategoryDetailsComponent implements OnInit {

  categoryDetails: Category = null;
  public inputFormControl: FormGroup = null;

  constructor(private dialogRef: MatDialogRef<ManageCategoryDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Category, private categoryService: CategoriesService,
    private dialog: MatDialog, public generalService: GeneralHelperService) { }

  ngOnInit(): void {
    if (this.data == null) {
      this.inputFormControl = new FormGroup({
        categoryName: new FormControl('', [Validators.required, Validators.maxLength(50)])
      });
    } else {
      this.inputFormControl = new FormGroup({
        categoryName: new FormControl(this.data.categoryName, [Validators.required, Validators.maxLength(50)])
      });
    }
  }
  onUpdateProduct(data, id: string) {
    //console.log(data);
    if (this.inputFormControl.valid) {
      this.generalService.openWaitingPopup();
      //const dialogWaitingRef = this.dialog.open(WaitingComponent);
      this.categoryService.updateCategory(data, id).subscribe(
        (response) => {
          this.generalService.closeWaitingPopup();
          this.generalService.handleMessage("Success", response.message);
          this.dialogRef.close(true);
        },
        (error) => {
          this.generalService.closeWaitingPopup();
          //console.log(error);
          this.generalService.handleError(error);
        }
      );
    }
  }

  onStoreCategory(data) {
    if (this.inputFormControl.valid) {
      this.generalService.openWaitingPopup();
      this.categoryService.storeNewCategory(data).subscribe(
        (response) => {
          this.generalService.closeWaitingPopup();
          this.generalService.handleMessage("Success", response.message);
          this.dialogRef.close(true);
        },
        (error) => {
          this.generalService.closeWaitingPopup();
          //console.log(error);
          this.generalService.handleError(error);
        }
      );
    }
  }

}
