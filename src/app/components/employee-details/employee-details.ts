import { Component } from '@angular/core';
import { MyService } from '../../services/my-service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css',
  providers: [MyService]
})
export class EmployeeDetails {
  constructor(private myService: MyService, private router: Router) { }

  onSelect(employee: any) {
    this.router.navigate(['/employeeDetails', employee.id])
  }

  employees: any[] = [];

  ngOnInit() {
    this.employees = this.myService.getEmployees()
  }

}
