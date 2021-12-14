import {initialCourseState} from '../states/courses.state';
import {createReducer, on} from '@ngrx/store';
import * as CourseActionTypes from './../actions/courses.actions';

export const courseReducer = createReducer(
  initialCourseState,
  on(CourseActionTypes.loadCourseRequestAction, (state, {id}) => ({
    ...state,
    isLoading: true
  })),

  on(CourseActionTypes.loadCourseSuccessAction, (state, {course}) => ({
    ...state,
    isLoading: false,
    selectedCourse: course
  })),

  on(CourseActionTypes.loadCourseFailureAction, (state, {error}) => ({
    ...state,
    isLoading: false,
    error: error
  })),

  on(CourseActionTypes.loadRequestAction, state => ({
    ...state,
    isLoading: true
  })),

  on(CourseActionTypes.loadSuccessAction, (state, {items}) => ({
    ...state,
    isLoading: false,
    courses: items
  })),

  on(CourseActionTypes.loadFailureAction, (state, {error}) => ({
    ...state,
    isLoading: false,
    error: error
  })),

  on(CourseActionTypes.saveRequestAction, state => ({
    ...state,
    isLoading: true
  })),

  on(CourseActionTypes.saveSuccessAction, (state, {item}) => ({
    ...state,
    isLoading: false,
    selectedCourse: item,
    error: null
  })),

  on(CourseActionTypes.saveFailureAction, (state, {error}) => ({
    ...state,
    isLoading: false,
    error: error
  })),

  on(CourseActionTypes.updateRequestAction, state => ({
    ...state,
    isLoading: true
  })),

  on(CourseActionTypes.updateSuccessAction, (state, {item}) => ({
    ...state,
    isLoading: false,
    selectedCourse: item,
    error: null
  })),

  on(CourseActionTypes.updateFailureAction, (state, {error}) => ({
    ...state,
    isLoading: false,
    error: error
  })),

  on(CourseActionTypes.deleteRequestAction, state => ({
    ...state,
    isLoading: true
  })),

  on(CourseActionTypes.deleteSuccessAction, (state, {id}) => ({
    ...state,
    isLoading: false,
    courses: state.courses.filter(x => x.id != id)
  })),

  on(CourseActionTypes.deleteFailureAction, (state, {error}) => ({
    ...state,
    isLoading: false,
    error: error
  }))
);
