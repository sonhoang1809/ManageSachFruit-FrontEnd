import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCostsComponent } from './manage-costs.component';

describe('ManageCostsComponent', () => {
  let component: ManageCostsComponent;
  let fixture: ComponentFixture<ManageCostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
