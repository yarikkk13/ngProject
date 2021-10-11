import {Component, OnInit} from '@angular/core';

import {ICourse} from "../../models/Course";
import {CoursesService} from "../../services/courses.service";
import {courses} from "../../mockArrays/mockCourses";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})

export class SectionComponent implements OnInit {

  public courses?: ICourse[];

  public search: string = 'Search';

  public add: string = 'Add course';

  public load: string = 'LOAD MORE';

  public noData: string = 'No data.Feel free to add new course';

  public searchText: string = '';

  public trackByIndex = (index: number): number => {
    return index;
  };

  public edit(text: string): void {
    console.log(text)
  };

  public delete(text: string): void {
    console.log(text);
  }

  public showTheSearching(searchText: string): any {

    console.log(searchText)
    console.log(this.courses?.filter(course => course.title.includes(searchText)))
    return this.courses?.filter(course => course.title.includes(searchText))
  }

  public showMore(): void {
    console.log(this.load)
  }

  constructor(private courseService: CoursesService) {
  }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses()
    console.log('init') //lifecycle hooks to understand the ordering
  }
}
