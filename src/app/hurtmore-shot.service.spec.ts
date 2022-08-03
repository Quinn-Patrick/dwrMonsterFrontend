import { TestBed } from '@angular/core/testing';

import { HurtmoreShotService } from './hurtmore-shot.service';

describe('HurtmoreShotService', () => {
  let service: HurtmoreShotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HurtmoreShotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
