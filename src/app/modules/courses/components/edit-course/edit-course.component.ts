import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {CoursesService} from "../../../../services/courses.service";
import {ICourse} from "../../../../models/Course";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})

export class EditCourseComponent implements OnInit, OnDestroy {
  public course: ICourse;

  public save: string = 'Save';
  public cancel: string = 'Cancel';

  public notFoundText = '404 error';
  public text = "sorry, your page doesn't exists";

  public subscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute,
              private coursesService: CoursesService) {
  }

  public editCurrentCourse(): void {
    this.coursesService.updateCourse(this.course.id, this.course)
  }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.params
      .subscribe(params => {
        this.course = this.coursesService.getCourseById(params.id) as any
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
