import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
// import { EmployeeService } from '../../services/employee';
import { ActivatedRoute, Router } from '@angular/router';
// import { email } from '@angular/forms/signals';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../services/employees';

@Component({
  selector: 'app-edit-employee',
  imports: [ReactiveFormsModule,MatInputModule,
    MatButtonModule,
    CommonModule],
  templateUrl: './edit-employee.html',
  styleUrl: './edit-employee.css',
})
export class EditEmployee implements OnInit {


  fb = inject(FormBuilder);
  service = inject(EmployeeService);
  route = inject(ActivatedRoute)
  router = inject(Router)

  id!: number;

  form =
    this.fb.group(
      {
        id: [0],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.email]
      }
    )

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getEmployeeById(this.id).subscribe(data => {
      this.form.patchValue(data);
    })
  }
  update() {
    this.service.updateEmployee(this.form.value as any).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
