import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Monster } from './monster';
import { MonsterService } from './monster.service';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class SingleAnswerQuestionService {
  
  generateQuestion(primaryText: string, correctAnswerIndex: number): Observable<Question>{
    return new Observable<Question>((observer) => {
      let question: Question = {text: "", answers: [], correctAnswer: 0};
      this.monsterService.getMonsterRandom().subscribe((monster) => {
        question.text = primaryText.replace("$$", monster.name);
        question.correctAnswer = this.correctAnswer(correctAnswerIndex, monster);
        this.populateAnswers(question);
        observer.next(question);
      });
    });
  }

  correctAnswer(index: number, monster: Monster): number{
    switch(index){
      case 0: return monster.strength;
      case 1: return monster.agility;
      case 2: return monster.xp;
      case 3: return monster.gold;
      default: return monster.strength;
    }
  }

  populateAnswers(question: Question): void{
    question.answers[Math.floor(Math.random() * 4)] = "" + question.correctAnswer;

    for(let i: number = 0; i < 4; i++){
      if(question.answers[i] === "" + question.correctAnswer){
        
        continue;
      }
      do{
        question.answers[i] = "" + this.generateGeneralIncorrectAnswer(question.correctAnswer);
      }while(this.checkAnswerOccurences(question.answers, question.answers[i]) >= 2)
    }
  }

  generateGeneralIncorrectAnswer(correctAnswer: number): number{
    //It is possible for an incorrect answer to range from half of the correct answer to double it,
    //although these maximum and minimum values can vary.
    let max: number = Math.floor(correctAnswer * (Math.random() + 1.0));
    let min: number = Math.floor(correctAnswer * ((Math.random() * 0.5) + 0.5));
    let result = Math.floor(Math.random() * (max - min) ) + min;
    return result < 1 ? 1 : result;
  }

  checkAnswerOccurences(array: any[], element: any): number{
    let occurrences: number = 0;
    for(let i of array){
      if(element === i){
        occurrences++;
      }
    }
    return occurrences
  }

  constructor(private monsterService: MonsterService) { }
}
