import { Component, OnInit } from '@angular/core';

import { Event } from "./models/event.model";
import { Schedule } from "./models/schedule.model";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})

export class ScheduleComponent implements OnInit {

  schedule: Schedule = {
    start: new Date(2018, 11, 10),
    end: new Date(2018, 11, 12),
    resources: ['John', 'truck 1', 'truck 22' ],
    events: [
      {
        start: new Date(2018, 11, 11, 11),
        end: new Date(2018, 11, 11, 12),
        name: 'work',
        url: '#'
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
