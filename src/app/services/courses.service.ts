import { Injectable } from '@angular/core';
import { courses } from "../mockArrays/mockCourses";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  getCourses() {
    return courses;
  }
}
