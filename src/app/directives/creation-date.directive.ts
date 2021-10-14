import {Directive, ElementRef, Input } from '@angular/core';
import {ICourse} from "../models/Course";

@Directive({
  selector: '[appCreationDate]'
})
export class CreationDateDirective {
  @Input()
  directivesCourse: ICourse;

  constructor(private elementRef: ElementRef) {
    const courseDate:number = this.directivesCourse?.creationTime.getTime();
    const currentDate:number = Date.now();
    const fourteenDays:number = 1209600000;

    if (courseDate < currentDate && courseDate >= currentDate - fourteenDays) {
      this.elementRef.nativeElement.style.border = "solid 1px green";
    } else if (courseDate > currentDate) {
      this.elementRef.nativeElement.style.border = "solid 1px blue";
    }
  }

}
