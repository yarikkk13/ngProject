import {Directive, ElementRef, Input} from '@angular/core';
import {ICourse} from "../models/Course";

@Directive({
  selector: '[appCreationDate]'
})
export class CreationDateDirective {
  @Input()
  directivesCourse: ICourse;

  constructor(private elementRef: ElementRef) {
    const courseDate = this.directivesCourse.creationTime.getDate();
    const currentDate = Date.now();

    if (courseDate < currentDate && courseDate >= currentDate - 14) {
      this.elementRef.nativeElement.style.border = "solid 1px green";
    } else if (courseDate > currentDate) {
      this.elementRef.nativeElement.style.border = "solid 1px blue";
    }
  }

}
