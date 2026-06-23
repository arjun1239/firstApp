import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { EmployeesService } from '../../services/employees';
import { Employee } from '../../models/employee';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { EmployeeService } from '../../services/employees';

@Component({
  selector: 'app-view-employee',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './view-employee.html',
  styleUrl: './view-employee.css',
})
export class ViewEmployee implements OnInit {

  employee!: Employee;

  route = inject(ActivatedRoute);
  service = inject(EmployeeService);
  cdr = inject(ChangeDetectorRef); // ✅ ADD

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));

      this.service.getEmployeeById(id).subscribe({
        next: (data:any) => {
          console.log(data);

          this.employee = data;

          this.cdr.detectChanges(); 
        }
      });
    });
  }
}
