import { TestBed } from '@angular/core/testing';

import { HpXpRatioService } from './hp-xp-ratio.service';

describe('HpXpRatioService', () => {
  let service: HpXpRatioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HpXpRatioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
