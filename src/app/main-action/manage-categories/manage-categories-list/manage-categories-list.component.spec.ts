import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCategoriesListComponent } from './manage-categories-list.component';

describe('ManageCategoriesListComponent', () => {
  let component: ManageCategoriesListComponent;
  let fixture: ComponentFixture<ManageCategoriesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCategoriesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCategoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
