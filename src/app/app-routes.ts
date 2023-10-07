import { Route, Routes } from "@angular/router";
import { ListEmployeesComponent } from "./employees/list-employees.component";
import { ErrorComponent } from "./error/error.component";
import { UpdateEmployeeComponent } from "./employees/update-employee.component";

export const routes : Routes = [
  {path:'admin', loadChildren:()=>import('./admin-dashboard/admin-dashboard.module').then(m=>m.AdminDashboardModule)},
  { path: 'list', component: ListEmployeesComponent},
  { path: 'update/:id',component:UpdateEmployeeComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },

  {path:'**',component:ErrorComponent}
] ;