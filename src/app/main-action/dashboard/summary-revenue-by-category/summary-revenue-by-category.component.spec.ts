import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryRevenueByCategoryComponent } from './summary-revenue-by-category.component';

describe('SummaryRevenueByCategoryComponent', () => {
  let component: SummaryRevenueByCategoryComponent;
  let fixture: ComponentFixture<SummaryRevenueByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryRevenueByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryRevenueByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
