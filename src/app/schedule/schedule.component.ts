import { Component, OnInit } from '@angular/core';

import { Event } from "./models/event.model";
import { Resource } from "./models/resource.model";
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
    resources: [
      {
        name: 'John',
        events: [
          {
            start: new Date(2018, 11, 11, 11),
            end: new Date(2018, 11, 11, 12),
            name: 'work order #200',
            url: '#'
          },
          {
            start: new Date(2018, 11, 12, 9),
            end: new Date(2018, 11, 12, 12),
            name: 'work order #222',
            url: '#'
          }
        ]
      },
      {
        name: 'Truck278',
        events: [
          {
            start: new Date(2018, 11, 11, 11),
            end: new Date(2018, 11, 11, 12),
            name: 'work order #200',
            url: '#'
          }
        ]
      },
      {
        name: 'Truck452',
        events: []
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
