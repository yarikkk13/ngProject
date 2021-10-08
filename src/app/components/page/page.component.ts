import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ICourse } from "../../models/Course";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  @Input()
  course: ICourse;

  @Output() eventOfDeleting = new EventEmitter<any>();

  public deleteEvent(): void {
    this.eventOfDeleting.emit(this.course.id)
  };

  @Output() public eventOfEditing = new EventEmitter<any>();

  public editEvent() {
    this.eventOfEditing.emit(this.course.id)
  }

  public editCourse: string = 'Edit';
  public deleteCourse: string = 'Delete';

  ngOnInit(): void {
  }

}
