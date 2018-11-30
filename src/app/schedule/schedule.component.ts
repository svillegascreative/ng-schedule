import { Component, OnInit } from '@angular/core';

import { differenceInMinutes, eachDay, format } from "date-fns";

import { Event } from "./models/event.model";
import { Resource } from "./models/resource.model";
import { Schedule } from "./models/schedule.model";
import { SCHEDULE } from "./mock-schedule";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})

export class ScheduleComponent implements OnInit {

  schedule: Schedule = SCHEDULE;
  dates: Date[] = this.getDates();
  headerDates: string[] = this.getHeaderDates();
  
  constructor() { }
  
  ngOnInit() {
  }

  getDates() {
    return eachDay(this.schedule.start, this.schedule.end);
  }

  getHeaderDates() {
    return this.dates.map(date => format(date, 'MMM Do YYYY'));
  }
  
  getScheduleDuration() {
    return differenceInMinutes(this.schedule.end, this.schedule.start);
  }

  getEventDuration(event) {
    return differenceInMinutes(event.end, event.start);
  }

  setEventWidth(event) {
    // we want event width as percent of schedule width
    return this.getEventDuration(event) / this.getScheduleDuration() *100;
  }
  
  getEventStartOffset(event) {
    return differenceInMinutes(event.start, this.schedule.start);
  }

  setEventPos(event) {
    // we want event margin as percent of schedule width
    return this.getEventStartOffset(event) / this.getScheduleDuration() *100;
  }

}
