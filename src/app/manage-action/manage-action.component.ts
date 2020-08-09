import { ManageAction, Action } from './../Models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-manage-action',
  templateUrl: './manage-action.component.html',
  styleUrls: ['./manage-action.component.css']
})
export class ManageActionComponent implements OnInit {

  @Input() manageActionId;
  actions: Action[];
  manageActions: ManageAction[];
  selectedManageAction: ManageAction;
  constructor() {
    
    this.manageActions= [
      new ManageAction(1,"Quản lý lô hàng",
        [
          new Action(1,"Thêm 1 lô hàng mới"),
          new Action(2,"Xem tất cả các lô hàng")         
        ],
      ),
      new ManageAction(2,"Quản lý kho fruits",
        [
          new Action(1,"Thêm 1 fruit cho lô hàng"),
          new Action(2,"Xem tất cả các kho fruits")
        ]
      ),
      new ManageAction(3,"Quản lý chi phí",
      [
        new Action(1,"Thêm 1 chi phí"),
        new Action(2,"Xem tất cả các chi phí"),
        new Action(3,"Xem chi phí của 1 tháng")
      ]),
      new ManageAction(4,"Quản lý đơn hàng",
      [
        new Action(1,"Thêm 1 đơn hàng"),
        new Action(2,"Xem tất cả các đơn hàng trong tháng"),
        new Action(3,"Xem tất cả các đơn hàng")
      ]),
      new ManageAction(5,"Quản lý vốn đầu tư",
      [
        new Action(1,"Thêm 1 đợt vốn"),
        new Action(2,"Xem tất cả đợt góp vốn")
      ]),
      new ManageAction(6,"Quản lý thu nhập",
      [
        new Action(1,"Xem thu nhập của 1 tháng"),
        new Action(2,"Xem tất cả các thu nhập")
      ])
    ];
   }

  ngOnInit(): void {
  }
  onSelect(selectedManageAction: ManageAction): void {
    this.selectedManageAction = selectedManageAction;
  }

}
