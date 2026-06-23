import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

    private apiUrl = 'http://localhost:8080/employees'
    private http = inject(HttpClient)

    getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this.apiUrl);
    }


    deleteEmployee(id: Number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }

    addEmployee(emp: Employee) {
        // emp is referring to interface for id or its picking up what's coming in parameter
        return this.http.post<Employee>(this.apiUrl, emp)
    }

    // getEmployeeById(id: number): Observable<Employee>{
    //     return this.http.get<Employee>.apply(`${this.apiUrl}/${id}`)

    // }

    getEmployeeById(id: number): Observable<Employee> {
        console.log("reached in get")
        return this.http.get<Employee>(`${this.apiUrl}/${id}`);
        
    }

    updateEmployee(emp: Employee): Observable<Employee> {
        //emp is referring to what 
        console.log('UPDATE CALLED');
        console.log('Employee Data:', emp);
        console.log('Employee ID:', emp.id);
        return this.http.put<Employee>(`${this.apiUrl}/${emp.id}`, emp);
    }


}
