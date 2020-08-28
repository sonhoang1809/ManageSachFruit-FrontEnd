import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryRevenueComponent } from './summary-revenue.component';

describe('SummaryRevenueComponent', () => {
  let component: SummaryRevenueComponent;
  let fixture: ComponentFixture<SummaryRevenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryRevenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
