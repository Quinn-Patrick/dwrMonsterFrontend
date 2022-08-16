import { TestBed } from '@angular/core/testing';

import { HpRangeQuestionService } from './hp-range-question.service';

describe('HpRangeQuestionService', () => {
  let service: HpRangeQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HpRangeQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
