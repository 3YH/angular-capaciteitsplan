import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Agent } from 'src/app/models/agent';
import { timeslots } from '../../../../mock-data/timeslots-data';
import { Timeslot } from '../../models/timeslot';
import { TimetableWindow } from '../../models/timetable-window';
import { SchedulingValidatorService } from '../../validators/scheduling-validator.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  days = ['MA', 'DI', 'WO', 'DO', 'VR', 'ZA', 'ZO'];
  public timetableWindows: TimetableWindow[] = [];
  events: string[] = [];
  public timeslots: Timeslot[] = timeslots;
  public onDestroy$ = new Subject();

  constructor(public schedulingValidatorService: SchedulingValidatorService) {}

  public ngOnInit(): void {
    this.timeslots.forEach((timeslot: Timeslot) => {
      this.days.forEach((day: string) => {
        this.timetableWindows.push({
          date: day,
          startTime: timeslot.startTime,
          endTime: timeslot.endTime,
          scheduledEmployees: []
        } as TimetableWindow);
      });
    });
  }

  public validate(
    event: CdkDragDrop<string[]>,
    timeslot: Timeslot,
    day: string
  ) {
    this.canScheduleEmployee(
      event.item.data as Agent,
      this.timetableWindows.find(
        (timetableWindow: TimetableWindow) =>
          timetableWindow.date === day &&
          timetableWindow.startTime === timeslot.startTime
      )
    );
  }

  public dropEmployeeInTimetableWindow(
    event: CdkDragDrop<string[]>,
    timeslot: Timeslot,
    day: string
  ) {
    if (
      !this.canScheduleEmployee(
        event.item.data,
        this.timetableWindows.find(
          (timetableWindow: TimetableWindow) =>
            timetableWindow.date === day &&
            timetableWindow.startTime === timeslot.startTime
        )
      )
    ) {
      return;
    }

    this.timetableWindows
      .find(
        (timetableWindow: TimetableWindow) =>
          timetableWindow.date === day &&
          timetableWindow.startTime === timeslot.startTime
      )
      .scheduledEmployees.push(event.item.data);
    this.addBackgroundColorClass(timeslot, day);
  }

  public getTimetableWindow(timeslot: Timeslot, day: string): TimetableWindow {
    return this.timetableWindows.find(
      (timetableWindow: TimetableWindow) =>
        timetableWindow.date === day &&
        timetableWindow.startTime === timeslot.startTime
    );
  }

  public getTotalPlannedTime(day: string): number {
    let total = 0;
    this.timeslots.forEach(
      (timeslot: Timeslot) =>
        (total += this.getTimetableWindow(timeslot, day).scheduledEmployees
          .length)
    );
    return total;
  }

  public canScheduleEmployee(
    employee: Agent,
    timetableWindow: TimetableWindow
  ) {
    return this.schedulingValidatorService.canScheduleEmployee(
      employee,
      timetableWindow
    );
  }

  public removeEmployeeFromSchedule(
    employee: Agent,
    timeslot: Timeslot,
    day: string
  ) {
    const timetableWindow = this.timetableWindows.find(
      aTimetableWindow =>
        aTimetableWindow.date === day &&
        aTimetableWindow.startTime === timeslot.startTime
    );

    timetableWindow.scheduledEmployees = timetableWindow.scheduledEmployees.filter(
      (e: Agent) => e !== employee
    );

    const index: number = this.events.indexOf(
      timeslot.startTime + timeslot.endTime + day
    );
    if (index !== -1) {
      this.events.splice(index, 1);
    }
  }

  public addBackgroundColorClass(timeslot: Timeslot, day: string) {
    this.events.push(timeslot.startTime + timeslot.endTime + day);
  }

  public onDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.unsubscribe();
  }
}
