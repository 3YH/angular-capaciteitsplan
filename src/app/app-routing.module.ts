import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailabilityFormComponent } from './modules/planning/components/availability-form/availability-form.component';
import { CapacityPlanComponent } from './modules/planning/components/capacity-plan/capacity-plan.component';
import { EmployeeListComponent } from './modules/planning/components/employee-list/employee-list.component';
import { ScheduleComponent } from './modules/planning/components/schedule/schedule.component';

const routes: Routes = [
  {
    path: 'schedule',
    component: ScheduleComponent
  },
  {
    path: 'forecast-and-plan',
    component: CapacityPlanComponent
  },
  { path: 'availability-form', component: AvailabilityFormComponent },
  { path: 'toolkit', component: CapacityPlanComponent },
  { path: 'insights', component: CapacityPlanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
