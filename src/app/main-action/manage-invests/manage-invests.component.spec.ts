import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageInvestsComponent } from './manage-invests.component';

describe('ManageInvestsComponent', () => {
  let component: ManageInvestsComponent;
  let fixture: ComponentFixture<ManageInvestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageInvestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageInvestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
