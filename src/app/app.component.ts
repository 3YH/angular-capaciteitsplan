import { Component } from '@angular/core';
import {
  actor1,
  actor2,
  actor3,
  actor4,
  actor5,
  actor6,
  actor7,
  actor8
} from './mock-data/actor-data';
import { Actor } from './models/actor';
import { PropertyAccessor } from './models/property-accessor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public employeeList: Actor[] = [
    actor1,
    actor2,
    actor3,
    actor4,
    actor5,
    actor6,
    actor7,
    actor8
  ];

  public propertyAccessors: PropertyAccessor[] = [
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
}
