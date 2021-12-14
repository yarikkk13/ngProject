import {Injectable} from '@angular/core';
import {Actions, ofType, createEffect} from '@ngrx/effects';
import {of as observableOf} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import * as courseActions from './../actions/courses.actions';
import {CoursesService} from "../../services/courses.service";

@Injectable()
export class CourseStoreEffects {
  constructor(private dataService: CoursesService, private actions$: Actions) {
  }

  loadCourseRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(courseActions.loadCourseRequestAction),
    switchMap((action => {
      return this.dataService.getCourseById(action.id.toString()).pipe(
        map((course: any) => {
          return courseActions.loadCourseSuccessAction({course})
        })
      )
    }))
  ))

  loadRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(courseActions.loadRequestAction),
    switchMap(action => {
      return this.dataService.getCourses(0, 5).pipe(
        map((items: any[]) => {
          return courseActions.loadSuccessAction({items})
        }),
        catchError(error => {
          return observableOf(courseActions.loadFailureAction({error}))
        })
      )
    })
  ))

}
