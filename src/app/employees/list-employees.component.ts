import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  private id: number = 1;
  employeesOrignal: Employee[] = [
    new Employee(1, 'Mary', 'Female', 'email', new Date('11/20/1994'), 'HR', true, 'mary@gmail.com', undefined, 'assets/images/mary.jpeg'),
    new Employee(2, 'John', 'Male', 'phone', new Date('11/20/1997'), 'IT', true, undefined, 1231231231, 'assets/images/john.jpeg'),
    new Employee(3, 'Bin', 'Male', 'phone', new Date('11/20/1999'), 'IT', true, undefined, 45645645, 'assets/images/bin.jpeg')
  ]
  employees: Employee[]
  constructor() {
    this.employees = this.employeesOrignal.filter(a => a.id == this.id);
  }
  ngOnInit() {

  }
  nextEmployee(): void {
    
    this.id = this.id >= 3 ? 1 : this.id + 1;
    console.log(this.id);
    this.employees = this.employeesOrignal.filter(a => a.id == this.id);
    console.log(this.employees[0]);
  }

}
