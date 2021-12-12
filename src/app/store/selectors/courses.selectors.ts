import {createSelector} from '@ngrx/store';

import {IAppState} from '../states/app.state';
import {CourseState} from '../states/courses.state';


const CourseFeature = (state: IAppState) => {
  return state.courses
};

export const getCourses = createSelector(
  CourseFeature,
  (state: CourseState) => state.courses
);

export const getCourse = createSelector(
  CourseFeature,
  (state: CourseState, id: number) => state.courses.filter(x => x.id === id)
);

export const getSelectedCourse = createSelector(
  CourseFeature,
  (state: CourseState) => state.selectedCourse
);

export const getCourseError = createSelector(
  CourseFeature,
  (state: CourseState) => state.error
);

export const getCourseIsLoading = createSelector(
  CourseFeature,
  (state: CourseState) => state.isLoading
);
