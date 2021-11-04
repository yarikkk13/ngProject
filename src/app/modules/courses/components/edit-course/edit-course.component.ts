import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CoursesService} from "../../../../services/courses.service";
import {ICourse} from "../../../../models/Course";

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  @Input()
  course: ICourse | undefined;

  public duration: number;

  public title: string = 'Title';
  public description: string = 'Description';
  public durationString: string = 'Duration';
  public date: string = 'Date';
  public authors: string = 'Authors';
  public save: string = 'Save';
  public cancel: string = 'Cancel';




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
