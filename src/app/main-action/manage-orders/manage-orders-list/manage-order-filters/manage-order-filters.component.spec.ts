import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageOrderFiltersComponent } from './manage-order-filters.component';

describe('ManageOrderFiltersComponent', () => {
  let component: ManageOrderFiltersComponent;
  let fixture: ComponentFixture<ManageOrderFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageOrderFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageOrderFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
