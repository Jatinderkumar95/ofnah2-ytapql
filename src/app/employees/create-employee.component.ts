import { Component,Input,OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
title : string = "Create - Employee"

Fahrenhait! : number;
inputText!:string;

 constructor(){
 }
}
