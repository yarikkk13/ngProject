import { Injectable } from '@angular/core';

import { courses } from "../mockArrays/mockCourses";
import { ICourse } from "../models/Course";

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  public coursesMock: ICourse[];

  constructor() {
    this.coursesMock = courses;
  }


  public getCourses(): ICourse[] {
    return this.coursesMock;
  }

  public getCourseById(id: string): ICourse | undefined {
    return this.coursesMock.find(course => course.id == +id)
  }

  public createCourse(course: ICourse): void {
    this.coursesMock.push(course)
  }

  public updateCourse(id: number, course: ICourse): void {
    this.coursesMock.forEach(function (currentCourse) {
      if (currentCourse.id == +id) {
        currentCourse = course
      }
    })
  }

  public removeCourse(id: string): void {
    this.coursesMock = this.coursesMock.filter((course) => {
      return course.id !== +id;
    })
  }
}
