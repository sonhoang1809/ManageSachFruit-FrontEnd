import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-header-content',
  templateUrl: './page-header-content.component.html',
  styleUrls: ['./page-header-content.component.css']
})
export class PageHeaderContentComponent implements OnInit {

  @Input() titleComponent: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
