import { Component, OnInit } from '@angular/core';

import { Event } from "./models/event.model";
import { Resource } from "./models/resource.model";
import { Schedule } from "./models/schedule.model";
import { SCHEDULE } from "./mock-schedule";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})

export class ScheduleComponent implements OnInit {

  schedule: Schedule = SCHEDULE;

  constructor() { }

  ngOnInit() {
  }

}
