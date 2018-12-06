import { Component, AfterViewInit} from '@angular/core';

import { addDays, differenceInMinutes, eachDay, endOfDay, format, startOfDay, startOfToday } from "date-fns";

import { Schedule } from "./models/schedule.model";
import { ScheduleDisplayComponent } from './schedule-display/schedule-display.component';
import { SCHEDULE } from "./mock-schedule";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})

export class ScheduleComponent implements AfterViewInit {

  schedule: Schedule = SCHEDULE;
  displayDays: number = 3;

  constructor() {
    // this.getSchedule();    
  }
  
  ngAfterViewInit() {
  }

  getSchedule() {
    // This will later fetch from API
    return this.schedule = SCHEDULE;
  }

  setScheduleStart(date) {
    this.schedule.start = date;    
  }
  
  setScheduleEnd(date) {
    this.schedule.end = date;
  }

  setDisplayDays(days) {
    this.displayDays = days;
  }

}
