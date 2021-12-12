import {ICourse} from '../../models/Course';

export interface CourseState {
  selectedCourse: ICourse | null,
  courses: ICourse[],
  isLoading?: boolean;
  error?: any;
}

export const initialCourseState: CourseState =
  {
    selectedCourse: null,
    courses: [],
    isLoading: false,
    error: null
  };
