import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-gender-conditional-four',
  templateUrl: './employee-gender-conditional-four.component.html',
  styleUrls: ['./employee-gender-conditional-four.component.css']
})
export class EmployeeGenderConditionalFourComponent implements OnInit {
  employeeList : Employee[]=[
    {employeeID : 1, employeeName:'Anuj Kumar', employeeGender : 'Male', employeeSalary: 6789.90 ,employeeDOB: new Date('01/01/1984')},
    {employeeID : 2, employeeName:'Amit Kumar', employeeGender : 'Male', employeeSalary: 678990.90 ,employeeDOB: new Date('01/04/1985')},
    {employeeID : 3, employeeName:'Sumit Kumar', employeeGender : 'Male', employeeSalary: 67089.90 ,employeeDOB: new Date('01/03/1986')},
    {employeeID : 4, employeeName:'Shwati', employeeGender : 'FeMale', employeeSalary: 65757.90 ,employeeDOB: new Date('01/02/1987')},
  ];
  constructor() { }

  ngOnInit() {
  }

}
