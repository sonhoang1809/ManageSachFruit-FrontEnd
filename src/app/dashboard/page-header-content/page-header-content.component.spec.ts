import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderContentComponent } from './page-header-content.component';

describe('PageHeaderContentComponent', () => {
  let component: PageHeaderContentComponent;
  let fixture: ComponentFixture<PageHeaderContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHeaderContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeaderContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
