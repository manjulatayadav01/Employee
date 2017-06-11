import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee';
@Pipe({
  name: 'nameSearch'
})
export class NameSearchPipe implements PipeTransform {

  transform(emp: Employee[], args: {name : string; gender : string;match:boolean;}): any {
    if(!args) return emp;
    let employee:Employee[] = emp;
    if(args.match)
    {
      if(args.name != "")
        employee= employee.filter(employee => employee.employeeName === args.name);
      if (args.gender != "")
        employee = employee.filter(employee => employee.employeeGender === args.gender);
   
    }
    else {
      if(args.name != "")
        employee= employee.filter(employee => employee.employeeName.toLocaleLowerCase().indexOf(args.name.toLocaleLowerCase()) !== -1);
      if (args.gender != "")
        employee = employee.filter(employee => employee.employeeGender.toLocaleLowerCase().indexOf(args.gender.toLocaleLowerCase()) !== -1);
    }
    
    return employee;
}

}
