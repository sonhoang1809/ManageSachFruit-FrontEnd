import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentCostComponent } from './recent-cost.component';

describe('RecentCostComponent', () => {
  let component: RecentCostComponent;
  let fixture: ComponentFixture<RecentCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
