import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCostsTypeListComponent } from './manage-costs-type-list.component';

describe('ManageCostsTypeListComponent', () => {
  let component: ManageCostsTypeListComponent;
  let fixture: ComponentFixture<ManageCostsTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCostsTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCostsTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
