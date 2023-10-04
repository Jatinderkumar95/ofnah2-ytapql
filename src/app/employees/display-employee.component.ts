import { Component, Input, OnChanges, Output, SimpleChanges,EventEmitter } from '@angular/core';
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

  @Output() notify : EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    for(const propName of Object.keys(changes)){
      const change = changes[propName];
      const previousValue = change.previousValue;
      const currentValue = change.currentValue;
    }
  }

  handleClick() : void
  {
    this.notify.emit(this.employee.name);
  }
}
