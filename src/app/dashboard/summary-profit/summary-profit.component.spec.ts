import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryProfitComponent } from './summary-profit.component';

describe('SummaryProfitComponent', () => {
  let component: SummaryProfitComponent;
  let fixture: ComponentFixture<SummaryProfitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryProfitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryProfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
