import {Component, Input, OnInit} from '@angular/core';
import {CoursesService} from "../../../../services/courses.service";
import {ICourse} from "../../../../models/Course";

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})

export class NewCourseComponent implements OnInit {

  @Input()
  course: ICourse;

  public duration: number;

  public title: string = 'Title';
  public description: string = 'Description';
  public durationString: string = 'Duration';
  public date: string = 'Date';
  public authors: string = 'Authors';
  public save: string = 'Save';
  public cancel: string = 'Cancel';

  constructor(private coursesService: CoursesService) {
  }

  addCourse(course:ICourse):void{
    this.coursesService.createCourse(course)

  }

  ngOnInit(): void {
  }

}
