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
  
  getScheduleWidth() {
    return document.querySelector('.ngsc-resource-events').clientWidth;
  }

  getScheduleDuration() {
    return differenceInMinutes(this.schedule.end, this.schedule.start);
  }

  getEventDuration(event) {
    return differenceInMinutes(event.end, event.start);
  }

  setEventWidth(event) {
    return this.getScheduleWidth() * this.getEventDuration(event) / this.getScheduleWidth();
  }

}
