import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCategoriesFilterComponent } from './manage-categories-filter.component';

describe('ManageCategoriesFilterComponent', () => {
  let component: ManageCategoriesFilterComponent;
  let fixture: ComponentFixture<ManageCategoriesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCategoriesFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCategoriesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
