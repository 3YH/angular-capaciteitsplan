import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataGraphingModule } from '../data-graphing/data-graphing.module';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { AvailabilityFormComponent } from './components/availability-form/availability-form.component';
import { CapacityPlanComponent } from './components/capacity-plan/capacity-plan.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { TimetableWindowComponent } from './components/timetable-window/timetable-window.component';

@NgModule({
  declarations: [
    CapacityPlanComponent,
    AvailabilityFormComponent,
    EmployeeComponent,
    EmployeeListComponent,
    ScheduleComponent,
    TimetableWindowComponent
  ],
  imports: [
    CommonModule,
    MaterialDesignModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    DataGraphingModule
  ],
  exports: [CapacityPlanComponent, AvailabilityFormComponent, ScheduleComponent]
})
export class PlanningModule {}
