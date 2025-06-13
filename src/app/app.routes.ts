import { Routes } from '@angular/router';
import { EmployeeDetails } from './components/employee-details/employee-details';
import { EmployeeList } from './components/employee-list/employee-list';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { App } from './app';
import { EmployeeDetailComponent } from './components/employee-detail-component/employee-detail-component';
import { SignupForm } from './components/signup-form/signup-form';
import { GetProductData } from './components/get-product-data/get-product-data';
import { AddProductForm } from './components/add-product-form/add-product-form';

export const routes: Routes = [
    {path: '',redirectTo: '/employeesList', pathMatch: 'full'},
    {path: 'employeesList', component: EmployeeDetails},
    {path: 'employeeDetails', component: EmployeeList},
    {path: 'employeeDetails/:id', component: EmployeeDetailComponent},
    {path: 'signupForm',component: SignupForm},
    {path: 'addProductRoute',component: AddProductForm},
    {path: '**', component: PageNotFound},
];
