import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})

export class DurationPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if (value < 60 && value > 0) {
      return `${value} min`
    } else if (value % 60 === 0 && value > 0) {
      return `${Math.floor(value / 60)} h`
    } else if (value % 60 !== 0 && value > 0) {
      return `${Math.floor(value / 60)} h ${value % 60} min`
    } else return `duration must be positive real number`
  }

}
