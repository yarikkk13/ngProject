import { initialCourseState, CourseState } from './courses.state';


export interface IAppState {
  courses: CourseState;
}

export const initialAppState: IAppState = {
  courses: initialCourseState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
