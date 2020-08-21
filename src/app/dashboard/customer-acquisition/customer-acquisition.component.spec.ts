import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAcquisitionComponent } from './customer-acquisition.component';

describe('CustomerAcquisitionComponent', () => {
  let component: CustomerAcquisitionComponent;
  let fixture: ComponentFixture<CustomerAcquisitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAcquisitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAcquisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
