import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProductsListComponent } from './manage-products-list.component';

describe('ManageProductsListComponent', () => {
  let component: ManageProductsListComponent;
  let fixture: ComponentFixture<ManageProductsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageProductsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
