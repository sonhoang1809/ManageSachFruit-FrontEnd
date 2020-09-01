import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCostTypesComponent } from './manage-cost-types.component';

describe('ManageCostTypesComponent', () => {
  let component: ManageCostTypesComponent;
  let fixture: ComponentFixture<ManageCostTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCostTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCostTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
