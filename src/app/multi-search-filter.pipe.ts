import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee';
@Pipe({
  name: 'multiSearchFilter'
})
export class MultiSearchFilterPipe implements PipeTransform {

  transform(emp: Employee[], args: any): any {
    if(!args) return emp;
    let employee:Employee[] = emp.filter(emp => emp.employeeName.toLocaleLowerCase().indexOf(args.toLocaleLowerCase()) !== -1);
    if(employee.length === 0)
    {
       employee = emp.filter(emp => emp.employeeGender.toLocaleLowerCase().indexOf(args.toLocaleLowerCase()) !== -1);
    
    }
    return employee;
   }

}
