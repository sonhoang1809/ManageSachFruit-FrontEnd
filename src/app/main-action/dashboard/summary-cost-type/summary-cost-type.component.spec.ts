import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryCostTypeComponent } from './summary-cost-type.component';

describe('SummaryCostTypeComponent', () => {
  let component: SummaryCostTypeComponent;
  let fixture: ComponentFixture<SummaryCostTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryCostTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryCostTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
