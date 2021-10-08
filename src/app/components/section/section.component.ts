import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ICourse } from "../../models/Course";
import { CoursesService } from "../../services/courses.service";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})

export class SectionComponent implements OnInit, OnChanges {

  public courses: ICourse[];

  public search: string = 'Search';

  public add: string = 'Add course';

  public load: string = 'LOAD MORE';

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

  public showTheSearching(searchText: string): void {
    console.log(searchText)
  }

  public showMore(): void {
    console.log(this.load)
  }

  constructor(private courseService: CoursesService) {
  }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses()
    console.log('init')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes')
  }
}
