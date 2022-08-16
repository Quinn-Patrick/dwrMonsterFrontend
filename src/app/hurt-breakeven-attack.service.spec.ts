import { TestBed } from '@angular/core/testing';

import { HurtBreakevenAttackService } from './hurt-breakeven-attack.service';

describe('HurtBreakevenAttackService', () => {
  let service: HurtBreakevenAttackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HurtBreakevenAttackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
