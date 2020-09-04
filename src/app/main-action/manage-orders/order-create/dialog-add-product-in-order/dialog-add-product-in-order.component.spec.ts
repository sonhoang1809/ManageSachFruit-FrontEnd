import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddProductInOrderComponent } from './dialog-add-product-in-order.component';

describe('DialogAddProductInOrderComponent', () => {
  let component: DialogAddProductInOrderComponent;
  let fixture: ComponentFixture<DialogAddProductInOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddProductInOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddProductInOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
