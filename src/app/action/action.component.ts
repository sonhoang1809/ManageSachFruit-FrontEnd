import { Action } from './../Models';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  @Input() actions: Action[];

  constructor() {
     
   }

  ngOnInit(): void {
  }

}
