import {Component, Input, OnInit} from '@angular/core';
import {ICourse} from "../../../../models/Course";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})

export class BreadcrumbComponent implements OnInit {

  @Input()
  course: ICourse;

  public courses: string = 'Courses';

  ngOnInit(): void {
  }

}
