import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css'],
})
export class DisplayEmployeeComponent implements OnChanges {
  private _employee!: Employee;
  @Input()
  set employee(val: Employee) {
    this._employee = val;
  }
  get employee(): Employee {
    return this._employee;
  }

  ngOnChanges(changes: SimpleChanges): void {}
}
