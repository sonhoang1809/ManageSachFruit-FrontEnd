import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarySalesByComponent } from './summary-sales-by.component';

describe('SummarySalesByComponent', () => {
  let component: SummarySalesByComponent;
  let fixture: ComponentFixture<SummarySalesByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummarySalesByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarySalesByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
