import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ICourse} from "../../models/Course";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  @Input()
  course: ICourse = {
    id: 1,
    title: '',
    creationTime: 1,
    duration: 1,
    description: ''
  };

  @Output() destruction = new EventEmitter<any>();

  destruct(): void {
    console.log(this.destruction);
  };

  editCourse: string = 'Edit';
  deleteCourse: string = 'Delete';

  ngOnInit(): void {
  }

}
