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
    let questionForm: number = Math.floor(Math.random() * 5);

    return new Observable((observer) => {
      this.monsterService.getMonsterRandom().subscribe((monster) => {
        console.log(`Attempting to create question form ${questionForm} with monster ${monster.name}`);
        switch(questionForm){
          case 0: question = this.generalQuestionService.generateQuestion("What is the strength of a $$", monster, () => {return monster.strength}); break;
          case 1: question = this.generalQuestionService.generateQuestion("What is the agility of a $$", monster, () => {return monster.agility}); break;
          case 2: question = this.generalQuestionService.generateQuestion("What is the experience yield of a $$", monster, () => {return monster.xp}); break;
          case 3: question = this.generalQuestionService.generateQuestion("What is the gold yield of a $$", monster, () => {return monster.gold}); break;
          case 4: question = this.generalQuestionService.generateQuestion("What is the chance that a $$ resists Hurt or Hurtmore, out of 64", monster, () => {return monster.hurtResistance * 64}); break;
          default: question = this.generalQuestionService.generateQuestion("What is the strength of a $$", monster, () => {return monster.strength}); break;
        }
        observer.next(question);
      });
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
