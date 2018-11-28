import { Event } from './event.model';

export class Schedule {
  start: Date;
  end: Date;
  resources: Array<string>;
  events: Array<Event>;
}