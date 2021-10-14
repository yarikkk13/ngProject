import {Injectable} from '@angular/core';
import {courses} from "../mockArrays/mockCourses";
import {ICourse} from "../models/Course";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  getCourses(): ICourse[] {
    return courses;
  }

  getCourseById(id: string): ICourse[] {
    return courses.filter(course => course.id == +id)
  }

  createCourse(id: number, title: string, creationTime: Date, duration: number, description: string, topRated: boolean): ICourse[] {
    const newCourse: ICourse = {id, title, creationTime, duration, description, topRated}
    let list:ICourse[] = courses;
    list.push(newCourse)
    return list
  }

  updateCourse(course: ICourse, ...args: []): ICourse {
    return course
  }

  removeCourse(courses: ICourse): any {
    return null
  }
}
