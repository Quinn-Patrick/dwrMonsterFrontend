import { TestBed } from '@angular/core/testing';

import { SingleAnswerQuestionService } from './single-answer-question.service';

describe('AnswerUtilityService', () => {
  let service: SingleAnswerQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleAnswerQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
