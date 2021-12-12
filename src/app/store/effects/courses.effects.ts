import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CoursesNgRxService } from '../../services/courses-ng-rx.service';
import * as courseActions from './../actions/courses.actions';

@Injectable()
export class CourseStoreEffects {
  constructor(private dataService: CoursesNgRxService, private actions$: Actions) {}

  loadCourseRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(courseActions.loadCourseRequestAction),
      switchMap(action => {
        const subject = "Course";
        return this.dataService.getCourse(action.id).pipe(
          map((course: any) => {
              return courseActions.loadCourseSuccessAction({ course })
          }),
          catchError((error: any) => {
            return observableOf(courseActions.loadCourseFailureAction({ error }))
          })
        )
      })
  ))

  loadRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(courseActions.loadRequestAction),
      switchMap(action => {
        const subject = "Course";
        return this.dataService.getCourses().pipe(
          map((items: any[]) => {
              return courseActions.loadSuccessAction({ items })
          }),
          catchError(error => {
            return observableOf(courseActions.loadFailureAction({ error }))
          })
        )
      })
  ))

  saveRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(courseActions.saveRequestAction),
      switchMap(action => {
        const subject = "Course";
        return this.dataService.saveCourse(action.item).pipe(
          map((item: any) => {
              return courseActions.saveSuccessAction({ item })
          }),
          catchError(error => {
            return observableOf(courseActions.saveFailureAction({ error }))
          })
        )
      })
  ))

  updateRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(courseActions.updateRequestAction),
    switchMap(action => {
      return this.dataService.updateCourse(action.item).pipe(
          map((item: any) => {
              return courseActions.updateSuccessAction({ item })
          }),
          catchError(error => {
            return observableOf(courseActions.updateFailureAction({ error }))
          })
        )
      })
  ))

  deleteRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(courseActions.deleteRequestAction),
    switchMap(action => {
      return this.dataService.deleteCourse(action.id.toString() ).pipe(
          map((item: any) => {
              return courseActions.deleteSuccessAction({ id: action.id })
          }),
          catchError(error => {
            return observableOf(courseActions.deleteFailureAction({ error }))
          })
        )
    })
  ))
}
