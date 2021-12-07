import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from "../models/Course";

@Pipe({
  name: 'orderBy'
})

export class OrderByPipe implements PipeTransform {

  transform(array: ICourse[], ...args: unknown[]): ICourse[] {
    return array.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateA - dateB;
    })
  }
}
