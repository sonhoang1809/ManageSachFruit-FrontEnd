import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCostsListComponent } from './manage-costs-list.component';

describe('ManageCostsListComponent', () => {
  let component: ManageCostsListComponent;
  let fixture: ComponentFixture<ManageCostsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCostsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
