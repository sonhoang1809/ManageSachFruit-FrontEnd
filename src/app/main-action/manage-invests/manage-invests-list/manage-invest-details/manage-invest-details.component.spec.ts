import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageInvestDetailsComponent } from './manage-invest-details.component';

describe('ManageInvestDetailsComponent', () => {
  let component: ManageInvestDetailsComponent;
  let fixture: ComponentFixture<ManageInvestDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageInvestDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageInvestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
