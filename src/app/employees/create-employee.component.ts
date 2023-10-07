import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  title: string = "Create - Employee"

  Fahrenhait!: number;
  inputText!: string;

  private httpService: HttpService;
  constructor(httpService: HttpService) {
    this.httpService = httpService;
    httpService.get().subscribe(val => console.log(val));
  }


}
