import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee';
@Pipe({
  name: 'genderSearch'
})
export class GenderSearchPipe implements PipeTransform {

  transform(emp: Employee[], args: string): any {
    if(!args) return emp;
    return  emp.filter(emp => emp.employeeGender.toLocaleLowerCase().indexOf(args.toLocaleLowerCase()) !== -1);
    
   }
}
