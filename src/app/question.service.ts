import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { Question } from './question';
import { MonsterService } from './monster.service';
import { Monster } from './monster';
import { Observable } from 'rxjs';
import { HpRangeQuestionService } from './hp-range-question.service';
import { SingleAnswerQuestionService } from './single-answer-question.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  

  constructor(private monsterService: MonsterService,
    private hpRangeQuestionService: HpRangeQuestionService,
    private generalQuestionService: SingleAnswerQuestionService) { }
    possibleQuestions = [
      {text: `What is the strength of a $$`, index: 0},
      {text: `What is the agility of a $$`, index: 1},
      {text: `What is the experience yield of a $$`, index: 2},
      {text: `What is the gold yield of a $$`, index: 3},
    ]

  generateQuestion(): Observable<Question>{
    let question: Question;
    let monster: Monster;
    let questionForm = this.possibleQuestions[Math.floor(Math.random() * this.possibleQuestions.length)];

    return new Observable((observer) => {
      this.generalQuestionService.generateQuestion(questionForm.text, questionForm.index).subscribe((question) =>{
        observer.next(question);
      })
    })

    /*&return new Observable((observer) =>{
      this.monsterService.getMonster(0 + Math.floor(Math.random() * 38) + 1).subscribe(monst => {
        monster = monst
        question = this.hpRangeQuestionService.generateQuestion(monster);
        observer.next(question);
      });
    })*/
  }
}
