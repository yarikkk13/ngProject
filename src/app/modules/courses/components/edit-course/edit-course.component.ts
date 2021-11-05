import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CoursesService} from "../../../../services/courses.service";
import {ICourse} from "../../../../models/Course";

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {


  course: ICourse;

  public save: string = 'Save';
  public cancel: string = 'Cancel';


  constructor(private activatedRoute: ActivatedRoute,
              private coursesService: CoursesService) {

    this.activatedRoute.params
      .subscribe(params => {
        this.course = this.coursesService.getCourseById(params.id) as any
      })
  }

  public editCurrentCourse(): void {
    this.coursesService.updateCourse(this.course.id, this.course)
  }


  ngOnInit(): void {
  }

}
