import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageInvestsListComponent } from './manage-invests-list.component';

describe('ManageInvestsListComponent', () => {
  let component: ManageInvestsListComponent;
  let fixture: ComponentFixture<ManageInvestsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageInvestsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageInvestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
