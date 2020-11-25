import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Agent } from 'src/app/models/agent';
import { TimetableWindow } from '../models/timetable-window';

const hasBeenScheduled = (agents: Agent[], agent: Agent): boolean =>
  agents.includes(agent);

const objectIsNull = (input: any): boolean => input == null;

const exceedsMaximumAmountOfEmployees = (
  timetableWindow: TimetableWindow
): boolean => timetableWindow.scheduledEmployees.length === 4;

@Injectable({
  providedIn: 'root'
})
export class SchedulingValidatorService {
  constructor(public snackBar: MatSnackBar, private zone: NgZone) {}

  public canScheduleEmployee(
    employee: Agent,
    timetableWindow: TimetableWindow
  ): boolean {
    if (objectIsNull(employee)) {
      this.displayErrorMessage('De opgegeven medewerker bestaat niet', 3000);
      return false;
    }
    if (
      objectIsNull(timetableWindow) ||
      objectIsNull(timetableWindow.scheduledEmployees)
    ) {
      this.displayErrorMessage(
        'Het opgegeven inroosterslot bestaat niet',
        3000
      );
      return false;
    }
    if (hasBeenScheduled(timetableWindow.scheduledEmployees, employee)) {
      this.displayErrorMessage(
        'De opgegeven medewerker is al ingeroosterd',
        3000
      );
      return false;
    }

    if (exceedsMaximumAmountOfEmployees(timetableWindow)) {
      this.displayErrorMessage(
        'Het maximum aantal medewerkers is bereikt',
        3000
      );
      return false;
    }
    return true;
  }

  private displayErrorMessage(message: string, duration: number): void {
    this.zone.run(() => {
      this.snackBar.open(message, null, {
        duration
      });
    });
  }
}
