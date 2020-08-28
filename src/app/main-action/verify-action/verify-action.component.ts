import { Component, OnInit, Inject, Injectable } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material/dialog';
@Component({
  selector: 'app-verify-action',
  templateUrl: './verify-action.component.html',
  styleUrls: ['./verify-action.component.css']
})
export class VerifyActionComponent implements OnInit {

  constructor(private  dialogRef:  MatDialogRef<VerifyActionComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) {
  }

  ngOnInit(): void {

    // this.dialogRef.afterOpened().subscribe(_ => {
    //   setTimeout(() => {
    //      this.dialogRef.close();
    //   }, 650)
    // });
  }
  

}
