import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterPopupMessageComponent } from './center-popup-message.component';

describe('CenterPopupMessageComponent', () => {
  let component: CenterPopupMessageComponent;
  let fixture: ComponentFixture<CenterPopupMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterPopupMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterPopupMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
