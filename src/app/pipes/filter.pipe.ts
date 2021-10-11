import { Pipe, PipeTransform } from '@angular/core';
import {ICourse} from "../models/Course";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: ICourse[], textSearch: string): ICourse[] {
    return array?.filter(course => course.title.includes(textSearch));
  }

}
