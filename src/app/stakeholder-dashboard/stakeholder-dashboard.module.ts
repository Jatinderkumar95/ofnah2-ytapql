import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponentComponent } from './home/home-component.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HomeComponentComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StakeholderDashboardModule { }
