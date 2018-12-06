import { Component} from '@angular/core';


import { Schedule } from "./models/schedule.model";
import { SCHEDULE } from "./mock-schedule";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})

export class ScheduleComponent {

  schedule: Schedule;
  displayDays: number = 3;

  constructor() {
    this.getSchedule();    
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
