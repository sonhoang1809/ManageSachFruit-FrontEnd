import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material/dialog';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private  dialogRef:  MatDialogRef<ProductDetailsComponent>, 
    @Inject(MAT_DIALOG_DATA) public  data:  any) { }

  ngOnInit(): void {
  }

}
