import { Component } from '@angular/core';
import { MyService } from '../../services/my-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-details',
  imports: [CommonModule],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css',
  providers: [MyService]
})
export class EmployeeDetails {

  employees: any[] = [];

  constructor(private myService: MyService){}

  ngOnInit(){
    this.employees = this.myService.getEmployees()
  }

}
