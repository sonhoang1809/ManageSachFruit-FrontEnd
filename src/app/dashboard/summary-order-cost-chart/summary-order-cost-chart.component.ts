import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn
} from '@angular/forms';

@Component({
  selector: 'app-summary-order-cost-chart',
  templateUrl: './summary-order-cost-chart.component.html',
  styleUrls: ['./summary-order-cost-chart.component.css']
})
export class SummaryOrderCostChartComponent implements OnInit {

  form: FormGroup;
  statisticsBys= [];
 
  constructor(private formBuilder: FormBuilder ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      statisticsBys:['']
    });

    this.statisticsBys=[
      {id:0, display:'Daily'},
      {id:1, display:'Monthly'},
      {id:2, display:'Yearly'}
    ]
  }

  submit(event: any){
    console.log(event.target.value);
    


  }

}
