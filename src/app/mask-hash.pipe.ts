import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskHash'
})
export class MaskHashPipe implements PipeTransform {

  transform(value: number, args: boolean): any {
    if(!args) return value;
    else return '######';
  }

}
