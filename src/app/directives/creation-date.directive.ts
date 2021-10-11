import {Directive, ElementRef, Input} from '@angular/core';
import {ICourse} from "../models/Course";

@Directive({
  selector: '[appCreationDate]'
})
export class CreationDateDirective {
  @Input()
  courseDirective: ICourse;

  constructor(private elementRef: ElementRef) {
    // this.elementRef.nativeElement.style.border = "solid 1px black";
    // this.elementRef.nativeElement.style.border = "solid 1px green";
    // if (this.courseDirective?.duration > 50) {
    //   this.elementRef.nativeElement.style.border = "solid 1px blue";
    // } else if
    // (this.courseDirective?.duration < 50) {
    //   this.elementRef.nativeElement.style.border = "solid 1px green"
    // }

  }

}
