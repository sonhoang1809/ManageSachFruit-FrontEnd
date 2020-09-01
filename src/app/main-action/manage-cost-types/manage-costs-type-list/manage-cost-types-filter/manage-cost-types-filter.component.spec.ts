import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCostTypesFilterComponent } from './manage-cost-types-filter.component';

describe('ManageCostTypesFilterComponent', () => {
  let component: ManageCostTypesFilterComponent;
  let fixture: ComponentFixture<ManageCostTypesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCostTypesFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCostTypesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
