import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from "../models/Course";

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: ICourse[], ...args: unknown[]): ICourse[] {
    return array.sort((a, b) => {
      const dateA = a.creationTime.getTime();
      const dateB = b.creationTime.getTime();
      return dateA - dateB;
    })
  }
}
