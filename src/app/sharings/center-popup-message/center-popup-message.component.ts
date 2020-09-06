import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-center-popup-message',
  templateUrl: './center-popup-message.component.html',
  styleUrls: ['./center-popup-message.component.css']
})
export class CenterPopupMessageComponent implements OnInit {

  constructor(private  dialogRef:  MatDialogRef<CenterPopupMessageComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) { }

  ngOnInit(): void {
    this.dialogRef.afterOpened().subscribe(_ => {
      setTimeout(() => {
         this.dialogRef.close();
      }, 1000)
    });
  }

}
