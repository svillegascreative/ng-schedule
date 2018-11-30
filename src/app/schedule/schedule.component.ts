import { Component, OnInit } from '@angular/core';

import { differenceInMinutes, eachDay, endOfDay, format } from "date-fns";

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
    let actualEnd = endOfDay(this.schedule.end)
    return differenceInMinutes(actualEnd, this.schedule.start);
  }

  getEventDuration(event) {
    return differenceInMinutes(event.end, event.start);
  }
  
  getEventStartOffset(event) {
    return differenceInMinutes(event.start, this.schedule.start);
  }
  
  setEventPos(event) {
    // we want event margin as percent of schedule width
    return this.getEventStartOffset(event) / this.getScheduleDuration() *100;
  }
  
  setEventWidth(event) {
    // we want event width as percent of schedule width
    return this.getEventDuration(event) / this.getScheduleDuration() *100;
  }
  
  alignEventText(event) {
    let offset = this.getEventStartOffset(event);
    if ( offset < 0 ) {
      return offset / this.getScheduleDuration() * 100 * -1;
    } 
  }

}
