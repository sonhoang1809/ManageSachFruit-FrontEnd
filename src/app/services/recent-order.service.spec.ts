import { TestBed } from '@angular/core/testing';

import { RecentOrderService } from './recent-order.service';

describe('RecentOrderService', () => {
  let service: RecentOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecentOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
