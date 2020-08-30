import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCostDetailsComponent } from './manage-cost-details.component';

describe('ManageCostDetailsComponent', () => {
  let component: ManageCostDetailsComponent;
  let fixture: ComponentFixture<ManageCostDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCostDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
