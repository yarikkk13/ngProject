import {Component, OnInit} from '@angular/core';

import {ICourse} from "../../../../models/Course";
import {CoursesService} from "../../../../services/courses.service";
import {Subject, Observable, pipe, of} from "rxjs";
import {debounceTime, distinctUntilChanged, filter, switchMap, map} from "rxjs/operators";

import {Store, StoreRootModule} from '@ngrx/store';
import {CourseState} from '../../../../store/states/courses.state';
import {IAppState} from '../../../../store/states/app.state';
import * as CourseActions from '../../../../store/actions/courses.actions';
import * as CourseSelectors from '../../../../store/selectors/courses.selectors';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})

export class SectionComponent implements OnInit {

  public courses: ICourse[];

  public courses$: ICourse[];
  public error$: Observable<any>;
  public isLoading$: Observable<boolean>;

  public add: string = 'Add course';
  public load: string = 'LOAD MORE';
  public noData: string = 'No data.Feel free to add new course';
  public searchText: string = '';

  private searchText$ = new Subject<string>();

  public start: number = 0;
  public count: number = 4;

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  search(text: string) {
    this.searchText$.next(text);
  }

  constructor(private courseService: CoursesService,
              private store$: Store<IAppState>) {
  }

  public trackByIndex = (index: number): number => {
    return index;
  };

  public edit(text: string): void {
    console.log(text)
  };

  public delete(id: string): void {
    let result = window.prompt('Do you really want delete this course? Yes/No');
    if (result?.toLowerCase() == 'yes') {
      this.courseService.removeCourse(id)
      this.courseService.getAllCourses().subscribe(value => this.courses = value)
    }
  };

  public showMore(): void {
    this.count = this.count + 5
    this.courseService.getCourses(this.start, this.count)
      .subscribe(value => this.courses = value)
    console.log(this.load)
  };

  ngOnInit(): void {
    // this.courseService.getCourses(this.start, this.count)
    //   .subscribe(value => this.courses = value)
    // console.log('init') //lifecycle hooks to understand the ordering

    this.store$.dispatch(CourseActions.loadRequestAction());

    this.store$.select(CourseSelectors.getCourses).subscribe(
      courses => {
        of(courses).subscribe((value) =>
        {console.log(value)
          this.courses$ = value});
      }
    );

    this.error$ = this.store$.select(CourseSelectors.getCourseError);
    // @ts-ignore
    this.isLoading$ = this.store$.select(CourseSelectors.getCourseIsLoading);

    this.searchText$.pipe(
      filter(value => value.length >= 3),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(text =>
        this.courseService.getCoursesByFragment(text))
    ).subscribe(value => this.courses = value);
  };

}
