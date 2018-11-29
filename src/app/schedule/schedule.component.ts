import { Component, OnInit } from '@angular/core';

import { eachDay, format } from "date-fns";

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

}
