import { Component, Input, OnInit, Output } from '@angular/core';
import { Agent } from 'src/app/models/agent';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  @Input()
  @Output()
  public employee: Agent;

  constructor() {}

  ngOnInit() {}
}
