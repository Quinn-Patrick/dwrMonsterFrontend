import { TestBed } from '@angular/core/testing';

import { AttackRangeService } from './attack-range.service';

describe('AttackRangeService', () => {
  let service: AttackRangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttackRangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
