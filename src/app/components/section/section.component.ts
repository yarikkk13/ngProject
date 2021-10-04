import {Component, OnInit} from '@angular/core';
import {ICourse} from "../../models/Course";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  currentCourse: ICourse = {
    id: 1,
    title: 'Video course 1. Name tag.',
    creationTime: 60,
    duration: 60,
    description: 'Examine a wide variety of technologies that have influenced our society significantly. Analyze the contribution\n' +
      '        these technologies make to society, associated ethical dilemmas, and critique their value to the individual and\n' +
      '        society.Initially, course descriptions are written when a new program is being developed or when developing a\n' +
      '        new course.'
  };

  search: string = 'Search';

  add: string = 'Add course';

  load: string = 'LOAD MORE';

  searchText: string = '';

  deleted(): void {
    console.log('deleted');
  }

  showTheSearching(searchText: string): void {
    console.log(searchText)
  }

  showMore(): void {
    console.log(this.load)
  }

  ngOnInit(): void {
  }

}
