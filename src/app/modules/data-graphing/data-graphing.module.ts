import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartCommonModule, NgxChartsModule } from '@swimlane/ngx-charts';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { GroupedBarChartComponent } from './components/grouped-bar-chart/grouped-bar-chart.component';

@NgModule({
  declarations: [GroupedBarChartComponent],
  imports: [
    MaterialDesignModule,
    CommonModule,
    ChartCommonModule,
    NgxChartsModule
  ],
  exports: [GroupedBarChartComponent]
})
export class DataGraphingModule {}
