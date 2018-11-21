import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'filter' })
export class filterPipe implements PipeTransform {
  
  transform(categories: any, searchText: any): any {
     let result = categories.filter(t=>t.name == searchText);
     return result;
  }
}