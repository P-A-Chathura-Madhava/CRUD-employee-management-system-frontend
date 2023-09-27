import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor() { }

  ngOnInit(): void {
    this.employees = [
      {
      "id": 1,
      "name": "Kasun",
      "address": "Panadura",
      "contact": "077-1234546"
      },
      {
        "id": 2,
        "name": "Nuwan",
        "address": "Horana",
        "contact": "071-1234546"
      }
  ]
  }

}
