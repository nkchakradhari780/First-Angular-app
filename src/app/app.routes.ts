import { Routes } from '@angular/router';
import { EmployeeDetails } from './components/employee-details/employee-details';
import { EmployeeList } from './components/employee-list/employee-list';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { App } from './app';
import { EmployeeDetailComponent } from './components/employee-detail-component/employee-detail-component';
import { SignupForm } from './components/signup-form/signup-form';

export const routes: Routes = [
    {path: '',redirectTo: '/employeesList', pathMatch: 'full'},
    {path: 'employeesList', component: EmployeeDetails},
    {path: 'employeeDetails', component: EmployeeList},
    {path: 'employeeDetails/:id', component: EmployeeDetailComponent},
    {path: 'signupForm',component: SignupForm},
    {path: '**', component: PageNotFound},
];
