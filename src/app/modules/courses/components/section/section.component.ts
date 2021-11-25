import {Component, OnInit} from '@angular/core';

import {ICourse} from "../../../../models/Course";
import {CoursesService} from "../../../../services/courses.service";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})

export class SectionComponent implements OnInit {

  public courses: ICourse[];

  public search: string = 'Search';
  public add: string = 'Add course';
  public load: string = 'LOAD MORE';
  public noData: string = 'No data.Feel free to add new course';
  public searchText: string = '';
  public start: number = 0;
  public count: number = 4;

  constructor(private courseService: CoursesService) {
  }

  public trackByIndex = (index: number): number => {
    return index;
  };

  public edit(text: string): void {
    console.log(text)
  };

  public delete(id: string): void {
    let result = window.prompt('Do you really want delete this course? Yes/No');
    if (result?.toLowerCase() == 'yes') {
      this.courseService.removeCourse(id)
      this.courseService.getAllCourses().subscribe(value => this.courses = value)
    }
  };

  // public showTheSearching(searchText: string): ICourse[] {
  //   console.log(searchText)
  //
  //   if (!searchText) {
  //     return this.courses = this.courseService.getCourses()
  //   }
  //   return this.courses = this.courses?.filter(course => course.title.includes(searchText))
  // };


  public showMore(): void {
    this.count = this.count + 5
    this.courseService.getCourses(this.start, this.count)
      .subscribe(value => this.courses = value)
    console.log(this.load)
  };

  ngOnInit(): void {
    this.courseService.getCourses(this.start, this.count)
      .subscribe(value => this.courses = value)
    console.log('init') //lifecycle hooks to understand the ordering
  };

}
