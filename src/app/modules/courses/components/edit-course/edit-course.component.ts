import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

import { CoursesService } from "../../../../services/courses.service";
import { ICourse } from "../../../../models/Course";

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})

export class EditCourseComponent implements OnInit, OnDestroy {
  public course: ICourse;

  public save: string = 'Save';
  public cancel: string = 'Cancel';

  public subscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute,
              private coursesService: CoursesService,
              private router: Router) {
  }

  public editCurrentCourse(): void {
    this.coursesService.updateCourse(this.course.id, this.course)
    console.log(this.course)
  }

  ngOnInit(): void {
    console.log()
    this.subscription = this.activatedRoute.params
      .subscribe(params => {
        this.coursesService.getCourseById(params.id).subscribe((value: ICourse) => {
          console.log(value)
          this.course = value
          if (!this.course) this.router.navigate(['not-found']).finally()
        })
      })

    console.log(this.course)
    console.log(this.subscription)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
