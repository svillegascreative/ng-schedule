import { Component, AfterViewInit } from '@angular/core';

import { addDays, differenceInMinutes, eachDay, endOfDay, format, startOfDay, startOfToday } from "date-fns";

import { Event } from "./models/event.model";
import { Resource } from "./models/resource.model";
import { Schedule } from "./models/schedule.model";
import { SCHEDULE } from "./mock-schedule";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})

export class ScheduleComponent implements AfterViewInit {

  schedule: Schedule = SCHEDULE;
  dates: Date[] = this.getDates();
  headerDates: string[] = this.getHeaderDates();
  dayWidth: string;
  daysView: number = 3;

  constructor() { }
  
  ngAfterViewInit() {
    this.setDayWidth(this.daysView);
    this.fixFirstColumn();
  }
  
  getDates() {    
    return eachDay(this.schedule.start, this.schedule.end);
  }
  
  getHeaderDates() {
    return this.dates.map(date => format(date, 'MMM. D YYYY'));
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

  setDayWidth(days) {
    let boxWidth = document.querySelector('.ngsc-table-scroll').clientWidth;
    let colWidth = document.querySelector('.ngsc-fixed-col').clientWidth;
    this.dayWidth = `${(boxWidth - colWidth) / days }px`;
  }
  
  fixFirstColumn() {
    let layer: any = document.querySelector('.ngsc-table').cloneNode(true);
    <any>document.querySelector('.ngsc-table-scroll').appendChild(layer).classList.add('cloned-col');
  }

}
