import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CoursesService} from "../../../../services/courses.service";

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  public duration: number;

  public title: string = 'Title';
  public description: string = 'Description';
  public durationString: string = 'Duration';
  public date: string = 'Date';
  public authors: string = 'Authors';
  public save: string = 'Save';
  public cancel: string = 'Cancel';

  public course: any;


  constructor(private activatedRoute: ActivatedRoute,
              private moviesListService: CoursesService) {

    this.activatedRoute.params
      .subscribe(params => {
        this.course = this.moviesListService.getCourseById(params.id)
      })
  }

  ngOnInit(): void {
  }

}
