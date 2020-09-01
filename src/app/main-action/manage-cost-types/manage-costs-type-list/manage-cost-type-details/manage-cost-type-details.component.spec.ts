import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCostTypeDetailsComponent } from './manage-cost-type-details.component';

describe('ManageCostTypeDetailsComponent', () => {
  let component: ManageCostTypeDetailsComponent;
  let fixture: ComponentFixture<ManageCostTypeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCostTypeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCostTypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
