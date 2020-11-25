import { Agent } from 'src/app/models/agent';

/**
 * Model for windows of time in a timetable including the scheduled employees.
 */
export interface TimetableWindow {
  date: string;
  startTime: string;
  endTime: string;
  scheduledEmployees: Agent[];
}
