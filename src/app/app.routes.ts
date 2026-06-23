import { Routes } from '@angular/router';
import { EmployeeList } from './components/employee-list/employee-list';
import { AddEmployee } from './components/add-employee/add-employee';
import { EditEmployee } from './components/edit-employee/edit-employee';
import { ViewEmployee } from './components/view-employee/view-employee';

export const routes: Routes = [

        { path: "", component: EmployeeList },
        { path: "add", component: AddEmployee },
        { path: "edit/:id", component: EditEmployee }, // pass dynamic data 
        { path: "view/:id", component: ViewEmployee}
    
];
