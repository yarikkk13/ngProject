import { Injectable } from '@angular/core';

import { ICourse } from "../models/Course";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  private url = 'http://localhost:3004/courses'

  constructor(private httpClient: HttpClient) {
  }

  public getAllCourses(): Observable<ICourse[]> {
    return this.httpClient.get<ICourse[]>(this.url)
  }

  public getCourses(start: number, count: number): Observable<ICourse[]> {
    return this.httpClient.get<ICourse[]>(this.url + `?start=${start}&count=${count}`)
  }

  public getCoursesByFragment(fragment: string): Observable<ICourse[]> {
    return this.httpClient.get<ICourse[]>(this.url + `?textFragment=${fragment}`)
  }

  public getCourseById(id: string): Observable<ICourse> {
    console.log(this.url + `/` + id)
    console.log(this.httpClient.get<ICourse>(this.url + `/` + id))
    return this.httpClient.get<ICourse>(this.url + `/` + id)
  }

  public createCourse(course: ICourse): void {
    this.httpClient.post(this.url, course)
  }

  public updateCourse(id: number, course: ICourse): void {
    this.httpClient.patch<ICourse>(this.url + `/` + id, course)
  }

  public removeCourse(id: string): void {
    this.httpClient.delete(this.url + `/` + id)
  }

}
