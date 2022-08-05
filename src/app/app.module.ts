import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ReminderComponent } from './reminder/reminder.component';
import { CountupComponent } from './countup/countup.component';
import { FormsModule } from '@angular/forms';
import {DatePipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ReminderComponent,
    CountupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
