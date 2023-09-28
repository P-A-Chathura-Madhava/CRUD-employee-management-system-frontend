import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './component/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './component/employee-details/employee-details.component';

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeeListComponent,
  },
  { path: 'create-employee', component: CreateEmployeeComponent },
  {
    path: '',
    redirectTo: 'employees',
    pathMatch: 'full',
  },
  { path: 'employee-details/:id', component: EmployeeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
