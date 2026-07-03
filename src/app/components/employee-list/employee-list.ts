import { Component, inject, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { EmployeeService } from '../../services/employees';
import { MatToolbar } from '@angular/material/toolbar';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { Digit } from '../../services/digit';
// import { EmployeeService } from '../../services/employee';

@Component({
  selector: 'app-employee-list',
  standalone: true, 
  imports: [
    MatTableModule,
    CommonModule,
    MatButtonModule,
    MatIconModule ,MatToolbar, MatMenuModule
  ],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit {

  service = inject(EmployeeService); 
  digitService = inject(Digit); //added for digit prediction 
  // employees: Employee[] = [];cls
  datasource: MatTableDataSource<any>;
  router = inject(Router);

  selectedFile!: File;
prediction: number | null = null;
loading = false;

  constructor() {
    this.datasource = new MatTableDataSource();  // read this again explanation
  }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.service.getEmployees().subscribe(data => {
      console.log(data);
      // this.employees = data;
      this.datasource.data = data;
    });
  }

  delete(id: Number) {
    this.service.deleteEmployee(id).subscribe(() => {
      this.loadEmployees();
    });
  }

  edit(id: Number) {
    this.router.navigate(['/edit', id]);
  }

  add() {
    this.router.navigate(['/add']);
  }

  view(id: number) {
    this.router.navigate(['/view', id]);
  }


  // added below code for digit prediction 

  onFileSelected(event: any) {
  this.selectedFile = event.target.files[0];
}

predictDigit() {
  if (!this.selectedFile) {
    alert("Please select an image");
    return;
  }

  this.loading = true;

  this.digitService.predictDigit(this.selectedFile)
    .subscribe({
      next: (res) => {

        // Added these two lines below 
        console.log("RAW RESPONSE:", res);
        const parsed = typeof res === 'string' ? JSON.parse(res) : res;



        this.prediction = res.digit;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
}
// digit prediction end here 



}