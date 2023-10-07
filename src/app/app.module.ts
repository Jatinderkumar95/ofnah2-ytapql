import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { TestPipe } from './pipes/test.pipe';
import { TempConvertorPipe } from './pipes/temp-convertor.pipe';
import { FilterArrayPipe } from './pipes/filter-array.pipe';
import { UpdateEmployeeComponent } from './employees/update-employee.component';
import { ErrorComponent } from './error/error.component';
import { routes } from './app-routes';
import { StakeholderDashboardRoutingModule } from './stakeholder-dashboard/stakeholder-dashboard-routing.module';
import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AdminDashboardModule,
    StakeholderDashboardRoutingModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    DisplayEmployeeComponent,
    TestPipe,
    TempConvertorPipe,
    FilterArrayPipe,
    UpdateEmployeeComponent,
    ErrorComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/