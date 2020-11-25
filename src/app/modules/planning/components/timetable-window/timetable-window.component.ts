import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Agent } from 'src/app/models/agent';
import { TimetableWindow } from '../../models/timetable-window';

@Component({
  selector: 'app-timetable-window',
  templateUrl: './timetable-window.component.html',
  styleUrls: ['./timetable-window.component.scss']
})
export class TimetableWindowComponent implements OnInit {
  @Input()
  public timetableWindow: TimetableWindow;

  @Output()
  public removeEvent: EventEmitter<Agent> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public removeAgent(agent: Agent): void {
    this.removeEvent.emit(agent);
  }
}
