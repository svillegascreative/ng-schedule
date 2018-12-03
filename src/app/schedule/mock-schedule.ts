import { Schedule } from "./models/schedule.model";

export const SCHEDULE: Schedule = {
  start: new Date(2018, 10, 29),
  end: new Date(2018, 11, 18),
  resources: [
    {
      name: 'John Johnson',
      events: [
        {
          start: new Date(2018, 11, 11, 11),
          end: new Date(2018, 11, 11, 16),
          name: 'work order #200',
          url: '#'
        },
        {
          start: new Date(2018, 11, 10, 9),
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
          end: new Date(2018, 11, 11, 16),
          name: 'work order #200',
          url: '#'
        }
      ]
    },
    {
      name: 'Truck452',
      events: [
        {
          start: new Date(2018, 11, 15, 11),
          end: new Date(2018, 11, 16, 12),
          name: 'work order #500',
          url: '#'
        }
      ]
    },
    {
      name: 'Tom Thompson',
      events: []
    },
    {
      name: 'Kristoff Van Der Vleutenhoffelkopf',
      events: [
        {
          start: new Date(2018, 10, 25, 9),
          end: new Date(2018, 10, 30, 17),
          name: 'work order #260',
          url: '#'
        }
      ]
    },
    {
      name: 'Yi Li',
      events: [
        {
          start: new Date(2018, 11, 5, 11),
          end: new Date(2018, 11, 6, 12),
          name: 'work order #501',
          url: '#'
        },
        {
          start: new Date(2018, 11, 7, 11),
          end: new Date(2018, 11, 9, 12),
          name: 'work order #502',
          url: '#'
        },
        {
          start: new Date(2018, 11, 10, 11),
          end: new Date(2018, 11, 15, 12),
          name: 'work order #503',
          url: '#'
        }
      ]
    },
    {
      name: 'Trailer221',
      events: []
    }
  ]
}