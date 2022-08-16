import { Injectable } from '@angular/core';
import { Monster } from './monster';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class HpRangeQuestionService {
  generateQuestion(monster: Monster): Question{
    let question: Question = {text: "", answers: [], correctAnswer: 0};
    let text: string = `Which of the following is a valid HP value for a ${monster.name}`;
    question.text = text;
    this.generateAnswers(monster, question);
    return question;
  }

  generateAnswers(monster: Monster, question: Question): void{
    let min = monster.lowerHp;
    let max = monster.upperHp;

    question.correctAnswer = Math.floor(Math.random() * (max - min) + min);

    question.answers[Math.floor(Math.random() * 4)] = "" + question.correctAnswer;

    for(let i: number = 0; i < 4; i++){
      if(question.answers[i] === "" + question.correctAnswer){
        
        continue;
      }
      do{
        question.answers[i] = "" + this.generateIncorrectHpValue(monster);
      }while(this.checkIfAnswerAlreadyPresent(question.answers, question.answers[i]) >= 2)
    }
  }

  generateIncorrectHpValue(monster: Monster): number{
    let amountWrong: number = 0;


    while(amountWrong === 0){
      amountWrong = Math.floor(Math.random() * 4) * Math.round(Math.random() * 2 - 1);
      
    }
    

    let value: number;
    if(amountWrong > 0){
      value = monster.upperHp + amountWrong;
    }else{
      value = monster.lowerHp + amountWrong;
    }

    if(value < 1){
      value = 1;
    }
    return value;
  }

  checkIfAnswerAlreadyPresent(array: any[], element: any): number{
    let occurrences: number = 0;
    for(let i of array){
      if(element === i){
        occurrences++;
      }
    }
    return occurrences
  }

  constructor() { }
}
