import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule-container/schedule.component';
import { ScheduleDisplayComponent } from './schedule/schedule-display/schedule-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    ScheduleDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
