import {Action, createAction, props} from '@ngrx/store';
import {ICourse} from '../../models/Course';

export enum ActionTypes {
  LOAD_COURSE_REQUEST = '[Course] Load Course Request',
  LOAD_COURSE_FAILURE = '[Course] Load Course Failure',
  LOAD_COURSE_SUCCESS = '[Course] Load Course Success',

  LOAD_REQUEST = '[Course] Load Request',
  LOAD_FAILURE = '[Course] Load Failure',
  LOAD_SUCCESS = '[Course] Load Success',

  SAVE_REQUEST = '[Course] Save',
  SAVE_FAILURE = '[Course] Save Failure',
  SAVE_SUCCESS = '[Course] Save Success',

  UPDATE_REQUEST = '[Course] Update',
  UPDATE_FAILURE = '[Course] Update Failure',
  UPDATE_SUCCESS = '[Course] Update Success',

  DELETE_REQUEST = '[Course] Delete',
  DELETE_FAILURE = '[Course] Delete Failure',
  DELETE_SUCCESS = '[Course] Delete Success'
}

export const loadCourseRequestAction = createAction(
  ActionTypes.LOAD_COURSE_REQUEST,
  props<{ id: number }>()
);

export const loadCourseSuccessAction = createAction(
  ActionTypes.LOAD_COURSE_SUCCESS,
  props<{ course: ICourse }>()
);

export const loadCourseFailureAction = createAction(
  ActionTypes.LOAD_COURSE_FAILURE,
  props<{ error: string }>()
);

///////

export const loadRequestAction = createAction(
  ActionTypes.LOAD_REQUEST
);

export const loadFailureAction = createAction(
  ActionTypes.LOAD_FAILURE,
  props<{ error: string }>()
);

export const loadSuccessAction = createAction(
  ActionTypes.LOAD_SUCCESS,
  props<{ items: ICourse[] }>()
);

////////

export const saveRequestAction = createAction(
  ActionTypes.SAVE_REQUEST,
  props<{ item: ICourse }>()
);

export const saveFailureAction = createAction(
  ActionTypes.SAVE_FAILURE,
  props<{ error: string }>()
);

export const saveSuccessAction = createAction(
  ActionTypes.SAVE_SUCCESS,
  props<{ item: ICourse }>()
);

///

export const updateRequestAction = createAction(
  ActionTypes.UPDATE_REQUEST,
  props<{ item: ICourse }>()
);

export const updateFailureAction = createAction(
  ActionTypes.UPDATE_FAILURE,
  props<{ error: string }>()
);

export const updateSuccessAction = createAction(
  ActionTypes.UPDATE_SUCCESS,
  props<{ item: ICourse }>()
);

////

export const deleteRequestAction = createAction(
  ActionTypes.DELETE_REQUEST,
  props<{ id: number }>()
);

export const deleteFailureAction = createAction(
  ActionTypes.DELETE_FAILURE,
  props<{ error: string }>()
);

export const deleteSuccessAction = createAction(
  ActionTypes.DELETE_SUCCESS,
  props<{ id: number }>()
);
