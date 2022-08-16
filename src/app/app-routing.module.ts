import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonsterDetailsComponent } from './monster-details/monster-details.component';
import { MonsterViewComponent } from './monster-view/monster-view.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  {path: '', redirectTo: '/monsters', pathMatch: 'full'},
  {path: 'monsters', component: MonsterViewComponent},
  {path: 'monster/:id', component:MonsterDetailsComponent},
  {path: 'quiz', component:QuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
