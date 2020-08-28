import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyActionComponent } from './verify-action.component';

describe('VerifyActionComponent', () => {
  let component: VerifyActionComponent;
  let fixture: ComponentFixture<VerifyActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
