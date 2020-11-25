import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  jaarData,
  maandData,
  weekData
} from 'src/app/mock-data/capaciteitsplan-data';
import { Actor } from 'src/app/models/actor';
import { PropertyAccessor } from 'src/app/models/property-accessor';
import { isNullOrUndefined } from 'util';
import { ChartSerieCollection } from '../../models/chart-series-collection';
import { ColourScheme } from '../../models/colour-scheme';

@Component({
  selector: 'app-grouped-bar-chart',
  templateUrl: './grouped-bar-chart.component.html',
  styleUrls: ['./grouped-bar-chart.component.scss']
})
export class GroupedBarChartComponent implements OnInit {
  @Input() public title = '';

  @Input() public xAxisLabel = 'Periode';
  @Input() public yAxisLabel = 'FTE';
  @Input() public showXAxisLabel: boolean;
  @Input() public showYAxisLabel: boolean;

  @Input() public showXAxis = true;
  @Input() public showYAxis = true;
  @Input() public showLegend = true;
  @Input() public gradient = true;

  @Input() public actor: Actor;
  @Input() public propertyAccessors: PropertyAccessor[] = [
    {
      propertyName: 'Week',
      accessor: (accessor: string) => null
    },
    {
      propertyName: 'Maand',
      accessor: (accessor: string) => null
    },
    {
      propertyName: 'Jaar',
      accessor: (accessor: string) => null
    }
  ];

  public isSelected: boolean[] = [];

  public groupedBarChartData: ChartSerieCollection[];

  public xAxisTickFormatting: () => string;
  public yAxisTickFormatting: () => number;

  public colorScheme: ColourScheme = {
    domain: ['#f5883b', '#9be1fa', '#7190e3', '#f29f46', '#f5d7bf']
  };

  constructor(public route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.propertyAccessors.forEach(() => this.isSelected.push(true));
    this.showXAxisLabel = isNullOrUndefined(this.xAxisLabel);
    this.showYAxisLabel = isNullOrUndefined(this.yAxisLabel);

    this.showSelectedPeriod('Week');
    this.yAxisLabel = 'FTE';
    this.xAxisLabel = 'periode';
  }

  public onChipSelected(period: string): void {
    this.showSelectedPeriod(period);
  }

  private showSelectedPeriod(period: string): void {
    if (period === 'Week') {
      this.groupedBarChartData = JSON.parse(weekData);
    } else if (period === 'Maand') {
      this.groupedBarChartData = JSON.parse(maandData);
    } else if (period === 'Jaar') {
      this.groupedBarChartData = JSON.parse(jaarData);
    }
  }
}
