import { Component, OnInit, Inject, Injectable } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material/dialog';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
@Injectable()
export class MessageComponent implements OnInit {


  constructor(private  dialogRef:  MatDialogRef<MessageComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) {
  }

  ngOnInit(): void {
    this.dialogRef.disableClose;
    this.dialogRef.afterOpened().subscribe(_ => {
      setTimeout(() => {
         this.dialogRef.close();
      }, 1000)
    });
  }

}
