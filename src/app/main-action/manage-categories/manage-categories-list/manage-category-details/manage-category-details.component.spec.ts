import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCategoryDetailsComponent } from './manage-category-details.component';

describe('ManageCategoryDetailsComponent', () => {
  let component: ManageCategoryDetailsComponent;
  let fixture: ComponentFixture<ManageCategoryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCategoryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCategoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
