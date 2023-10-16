import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../models/employee.model';
import { HttpService } from '../services/http.service';
import { FormGroup, NgForm } from '@angular/forms';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  title: string = "Create - Employee"

  Fahrenhait!: number;
  inputText!: string;

  countryList : string[] = ['abc','vbn','bnm'];
  contact! : Contact;

  @ViewChild('formRef',{}) contactForm! : NgForm;

  private httpService: HttpService;
  constructor(httpService: HttpService) {
    this.httpService = httpService;
    httpService.get().subscribe(val => console.log(val));
  }


  onSubmit(formGroup : NgForm){
console.log(formGroup.value);
  }
}


