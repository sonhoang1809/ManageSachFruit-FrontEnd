import { GeneralHelperService } from './../../../../services/general-helper.service';
import { OrderService } from './../../OrderServices/order.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Order, OrderDetails } from './../../../../models/order-details';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-manage-order-details',
  templateUrl: './manage-order-details.component.html',
  styleUrls: ['./manage-order-details.component.css']
})
export class ManageOrderDetailsComponent implements OnInit {

  orderDetails: OrderDetails = null;
  subTotal: number = 0;
  total: number = 0;
  constructor(private dialogRef: MatDialogRef<ManageOrderDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Order, private orderService: OrderService,
    private dialog: MatDialog, public generalService: GeneralHelperService) { }

  ngOnInit(): void {
    this.orderService.getOrderDetails(this.data.id).subscribe(
      (response)=>{
        this.orderDetails = response.data;
        for(var pro of this.orderDetails.productsDetailsInOrder){
          this.subTotal = this.subTotal+(pro.unitPrice*pro.quantity);
        }
        this.total = this.subTotal + this.orderDetails.shipCost;
      },
      (error)=>{
        this.generalService.handleError(error);
      }
    );
  }

}
