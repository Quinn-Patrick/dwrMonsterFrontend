import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from '../question';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  question?: Question;
  answered: boolean = false;
  correct: boolean = false;
  totalCorrect: number = 0;
  totalAnswered: number = 0;

  answerQuestion(answer: string){
    if(this.answered) return;
    this.answered = true;
    this.totalAnswered++;
    if(answer === "" + this.question?.correctAnswer){
      this.totalCorrect++;
      this.correct = true;
    }
  }

  nextQuestion(){
    this.answered = false;
    this.correct = false;
    this.questionService.generateQuestion().subscribe((question) => this.question = question);
  }

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.nextQuestion();
  }

}
