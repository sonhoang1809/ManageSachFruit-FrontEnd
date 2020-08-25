import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProductsFilterComponent } from './manage-products-filter.component';

describe('ManageProductsFilterComponent', () => {
  let component: ManageProductsFilterComponent;
  let fixture: ComponentFixture<ManageProductsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageProductsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProductsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
