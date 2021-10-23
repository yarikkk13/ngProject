import { Injectable } from '@angular/core';

import { courses } from "../mockArrays/mockCourses";
import { ICourse } from "../models/Course";

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  public getCourses(): ICourse[] {
    return courses;
  }

  public getCourseById(id: string): ICourse[] {
    return courses.filter(course => course.id == +id)
  }

  public createCourse(course: ICourse): void {
    courses.push(course)
  }

  public updateCourse(id: string, course: ICourse): ICourse[] {
    return courses.map(function (currentCourse) {
      if (currentCourse.id == +id) {
        currentCourse = course
      }
      return currentCourse
    })
  }

  public removeCourse(id: string): void {
    courses.splice(courses.findIndex(course => course.id === +id), 1)
    console.log(courses)
  }
}
