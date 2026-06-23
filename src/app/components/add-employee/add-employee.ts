import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
// import { EmployeeService } from '../../services/employee';
import { Router } from '@angular/router';
// import { email } from '@angular/forms/signals';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employees';

@Component({
  selector: 'app-add-employee',
  imports: [ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    CommonModule],
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.css',
})
export class AddEmployee {
  fb = inject(FormBuilder);
  service = inject(EmployeeService)
  router = inject(Router)

  form = this.fb.group({
    //id: ["", [Validators.required]],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });


  save() {
    if (this.form.valid) {
      //how id Value is passed here, to services to execute


      this.service.addEmployee(this.form.value as any).subscribe(
        () => {
          this.router.navigate(['/']);
        })
    }
  }






}
