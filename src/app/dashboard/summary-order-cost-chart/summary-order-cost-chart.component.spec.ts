import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryOrderCostChartComponent } from './summary-order-cost-chart.component';

describe('SummaryOrderCostChartComponent', () => {
  let component: SummaryOrderCostChartComponent;
  let fixture: ComponentFixture<SummaryOrderCostChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryOrderCostChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryOrderCostChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
