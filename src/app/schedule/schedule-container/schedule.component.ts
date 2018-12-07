import { Component} from '@angular/core';

import { addDays, startOfToday } from "date-fns";

import { Schedule } from "../models/schedule.model";
import { SCHEDULE } from "../mock-schedule";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})

export class ScheduleComponent {

  schedule: Schedule;
  displayDays: number = 3;

  constructor() {
    this.getSchedule(startOfToday(), addDays(startOfToday(), 13));    
  }
  
  getSchedule(start: Date, end: Date) {
    // This will later fetch from API
    this.schedule = SCHEDULE;

    this.schedule.start = start;
    this.schedule.end = end;
  }

  // setScheduleStart(date) {
  //   this.schedule.start = date;    
  // }
  
  // setScheduleEnd(date) {
  //   this.schedule.end = date;
  // }

  setDisplayDays(days) {
    this.displayDays = days;
  }

}
