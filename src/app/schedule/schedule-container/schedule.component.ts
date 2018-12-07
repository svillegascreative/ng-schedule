import { Component} from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

import { addDays, format, startOfToday } from "date-fns";

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
  defaultStart = startOfToday();
  defaultEnd = addDays(startOfToday(), 13)

  scheduleFilters = new FormGroup({
    startDate: new FormControl(),
    endDate: new FormControl()
  });

  constructor() {
    this.getSchedule(this.defaultStart, this.defaultEnd);    
  }
  
  getSchedule(start: Date, end: Date) {
    // This will later fetch from API
    this.schedule = SCHEDULE;

    this.schedule.start = start;
    this.schedule.end = end;
  }
  
  formatForDateInput(date: Date) {
    // required for native HTML date input; may not be needed for other datepickers
    return format(date, 'YYYY-MM-DD');
  }
  
  getDateFromInput(date: string) {
    // required for native HTML date input; may not be needed for other datepickers
    return new Date(date);
  }

  updateSchedule() {
    // TODO: correct for timezone errors;    
    this.schedule.start = this.getDateFromInput(this.scheduleFilters.value.startDate)
    this.schedule.end = this.getDateFromInput(this.scheduleFilters.value.endDate);
  }

  setDisplayDays(days) {
    this.displayDays = days;
  }

}
