import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonsterViewComponent } from './monster-view/monster-view.component';
import { MonsterDetailsComponent } from './monster-details/monster-details.component';
import { QuestionComponent } from './question/question.component';
import { MonsterService } from './monster.service';

@NgModule({
  declarations: [
    AppComponent,
    MonsterViewComponent,
    MonsterDetailsComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MonsterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
