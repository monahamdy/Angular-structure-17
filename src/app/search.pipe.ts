import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  // transform(value: any, arg?: any[]): any {
  //   return null;
  // }
  transform(value: any, input: any): any {
    if (input) {
       return value.filter((val:any) => val.name.indexOf(input) >= 0);
     } else {
       return value;
     }
    }

}
