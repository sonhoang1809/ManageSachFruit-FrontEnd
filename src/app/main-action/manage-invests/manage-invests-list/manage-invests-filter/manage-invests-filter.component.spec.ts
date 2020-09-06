import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageInvestsFilterComponent } from './manage-invests-filter.component';

describe('ManageInvestsFilterComponent', () => {
  let component: ManageInvestsFilterComponent;
  let fixture: ComponentFixture<ManageInvestsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageInvestsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageInvestsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
