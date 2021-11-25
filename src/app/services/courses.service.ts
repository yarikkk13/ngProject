import {Injectable} from '@angular/core';

import {ICourse} from "../models/Course";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  private url = 'http://localhost:3004/courses'

  public count = 3;

  public coursesMock: ICourse[];

  // constructor() {
  //   this.coursesMock = courses;
  // }

  constructor(private httpClient: HttpClient) {
  }

  public getCourses(): Observable<ICourse[]> {
    return this.httpClient.get<ICourse[]>(this.url)
    // return this.httpClient.get<ICourse[]>(this.url+'?start=0&count='+this.count)
  }

  // public getCourses(): ICourse[] {
  //   return this.coursesMock;
  // }
  //
  // public getCourseById(id: string): ICourse | undefined {
  //   return this.coursesMock.find(course => course.id == +id)
  // }

  public getCourseById(id: string): Observable<ICourse> {
    console.log(this.url + `/` + id)
    console.log(this.httpClient.get<ICourse>(this.url + `/` + id))
    return this.httpClient.get<ICourse>(this.url + `/` + id)
  }

  public createCourse(course: ICourse): void {
    this.coursesMock.push(course)
  }

  // public updateCourse(id: number, course: ICourse): void {
  //   this.coursesMock.forEach(function (currentCourse) {
  //     if (currentCourse.id == +id) {
  //       currentCourse = course
  //     }
  //   })
  // }
  public updateCourse(id: number, course: ICourse): void {
    this.httpClient.patch<ICourse>(this.url + `/` + id, course)
    // this.coursesMock.forEach(function (currentCourse) {
    //   if (currentCourse.id == +id) {
    //     currentCourse = course
    //   }
    // })
  }

  public removeCourse(id: string): void {
    // this.coursesMock = this.coursesMock.filter((course) => {
    //   return course.id !== +id;
    // }
    this.httpClient.delete(this.url+ `/` + id)

  }
}
