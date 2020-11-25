import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {
  actor1,
  actor2,
  actor3,
  actor4,
  actor5,
  actor6,
  actor7,
  actor8
} from 'src/app/mock-data/actor-data';
import { Actor } from 'src/app/models/actor';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  public $onDestroy: Subject<void> = new Subject<void>();

  @Input()
  public employees: Actor[] = [];

  constructor() {}

  ngOnInit() {
    this.employees = [
      actor1,
      actor2,
      actor3,
      actor4,
      actor5,
      actor6,
      actor7,
      actor8
    ];
  }

  public dropEmployee(employee: CdkDragDrop<Actor[]>): void {
    moveItemInArray(
      this.employees,
      employee.previousIndex,
      employee.currentIndex
    );
  }

  ngOnDestroy(): void {
    this.$onDestroy.next();
    this.$onDestroy.complete();
  }
}
