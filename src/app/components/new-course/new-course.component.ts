import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {

  public duration: number;

  public title: string = 'Title';
  public description: string = 'Description';
  public durationString: string = 'Duration';
  public date: string = 'Date';
  public authors: string = 'Authors';
  public save: string = 'Save';
  public cancel: string = 'Cancel';

  constructor() {
  }

  ngOnInit(): void {
  }

}
