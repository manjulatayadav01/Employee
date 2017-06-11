import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
@Component({
  selector: 'app-employee-sort-one',
  templateUrl: './employee-sort-one.component.html',
  styleUrls: ['./employee-sort-one.component.css']
})
export class EmployeeSortOneComponent implements OnInit {
  sortOrder:boolean = true;
  sortColumn:string = 'name';
  employeeList : Employee[]=[
    {employeeID : 1, employeeName:'Anuj Kumar', employeeGender : 'Male', employeeSalary: 6789.90 ,employeeDOB: new Date('01/01/1984')},
    {employeeID : 2, employeeName:'Amit Kumar', employeeGender : 'Male', employeeSalary: 678990.90 ,employeeDOB: new Date('01/04/1985')},
    {employeeID : 3, employeeName:'Sumit Kumar', employeeGender : 'Male', employeeSalary: 67089.90 ,employeeDOB: new Date('01/03/1986')},
    {employeeID : 4, employeeName:'Shwati', employeeGender : 'FeMale', employeeSalary: 65757.90 ,employeeDOB: new Date('01/02/1987')},
  ];

  
  constructor() { }

  ngOnInit() {
  }
  
  sortByEmployeeName(emp1 : Employee , emp2 :Employee){
      if(emp1.employeeName > emp2.employeeName) return 1;
      else if(emp1.employeeName === emp2.employeeName) return 0;
       else return -1;
      
  }

   sortByEmployeeNameDesc(emp1 : Employee , emp2 :Employee){
      if(emp1.employeeName < emp2.employeeName) return 1;
      else if(emp1.employeeName === emp2.employeeName) return 0;
       else return -1;
      
  }

  sortByEmployeeDOB(emp1 : Employee , emp2 :Employee){
    if(emp1.employeeDOB > emp2.employeeDOB) return 1;
    else if(emp1.employeeDOB === emp2.employeeDOB) return 0;
    else return -1;
  }
  sortByEmployeeDOBDesc(emp1 : Employee , emp2 :Employee){
    if(emp1.employeeDOB < emp2.employeeDOB) return 1;
    else if(emp1.employeeDOB === emp2.employeeDOB) return 0;
    else return -1;
  }

  sortByEmployeeGender(emp1 : Employee , emp2 :Employee){
    if(emp1.employeeGender > emp2.employeeGender) return 1;
    else if(emp1.employeeGender === emp2.employeeGender) return 0;
    else return -1;
  }
  
  sortByEmployeeGenderDesc(emp1 : Employee , emp2 :Employee){
    if(emp1.employeeGender < emp2.employeeGender) return 1;
    else if(emp1.employeeGender === emp2.employeeGender) return 0;
    else return -1;
  }

  sortByEmployeeSalary(emp1 : Employee , emp2 :Employee){
    return emp1.employeeSalary- emp2.employeeSalary;
  }

   sortByEmployeeSalaryDesc(emp1 : Employee , emp2 :Employee){
    return emp2.employeeSalary- emp1.employeeSalary;
  }

  sortType(sort:string){
    if(this.sortColumn === sort){this.sortOrder = !this.sortOrder }
    else{this.sortOrder = true;}
    if(sort === 'name' && this.sortOrder){
      this.employeeList = this.employeeList.sort(this.sortByEmployeeName);      
    }
    else   if(sort === 'name' && !this.sortOrder){
      this.employeeList = this.employeeList.sort(this.sortByEmployeeNameDesc);      
    }
    else if(sort === 'DOB' && this.sortOrder){
      this.employeeList = this.employeeList.sort(this.sortByEmployeeDOB);
    }
    else if(sort === 'DOB' && !this.sortOrder){
      this.employeeList = this.employeeList.sort(this.sortByEmployeeDOBDesc);
    }
    else if(sort === 'gender' && this.sortOrder){
      this.employeeList = this.employeeList.sort(this.sortByEmployeeGender);
    }
     else if(sort === 'gender' && !this.sortOrder){
      this.employeeList = this.employeeList.sort(this.sortByEmployeeGenderDesc);
    }
    else if(sort === 'salary' && this.sortOrder){
      this.employeeList = this.employeeList.sort(this.sortByEmployeeSalary);
    }
    else if(sort === 'salary' && !this.sortOrder){
      this.employeeList = this.employeeList.sort(this.sortByEmployeeSalaryDesc);
    }

    this.sortColumn = sort;

  }

}
