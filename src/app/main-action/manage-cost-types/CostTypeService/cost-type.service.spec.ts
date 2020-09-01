import { TestBed } from '@angular/core/testing';

import { CostTypeService } from './cost-type.service';

describe('CostTypeService', () => {
  let service: CostTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CostTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
