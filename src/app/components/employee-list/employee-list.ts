import { Component } from '@angular/core';
import { MyService } from '../../services/my-service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule,RouterLink],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
  providers: [MyService]
})
export class EmployeeList {
  employees: any[] = [];

  constructor(private myService: MyService){}

  ngOnInit(){
    this.employees = this.myService.getEmployees()
  }
}
