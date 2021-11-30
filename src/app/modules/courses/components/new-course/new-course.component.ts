import {Component, OnInit} from '@angular/core';

import {CoursesService} from "../../../../services/courses.service";
import {ICourse} from "../../../../models/Course";

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})

export class NewCourseComponent implements OnInit {

  public course: ICourse = {
    id: 0,
    name: 'some title',
    date: "2016-03-18T06:36:07+00:00",
    length: 0,
    description: 'some description',
    isTopRated: false,
    authors: []
  };

  public save: string = 'Save';
  public cancel: string = 'Cancel';

  constructor(private coursesService: CoursesService) {
  }

  public addCourse(): void {
    const min = Math.ceil(1);
    const max = Math.floor(10000000);
    this.course.id = Math.floor(Math.random() * (max - min)) + min;
    if (!this.coursesService.getCourseById(String(this.course.id))) {
      this.coursesService.createCourse(this.course)
    }
  }

  ngOnInit(): void {
    console.log('hello')
  }

}
