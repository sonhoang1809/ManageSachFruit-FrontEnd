import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCostsFilterComponent } from './manage-costs-filter.component';

describe('ManageCostsFilterComponent', () => {
  let component: ManageCostsFilterComponent;
  let fixture: ComponentFixture<ManageCostsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCostsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCostsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
