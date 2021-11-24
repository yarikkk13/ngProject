import {TestBed} from '@angular/core/testing';

import {CoursesService} from './courses.service';
import {courses} from "../mockArrays/mockCourses";
import {ICourse} from "../models/Course";

describe('CoursesService', () => {

  let service: CoursesService;
  let mockedCourses: ICourse[] = courses;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getCourses', () => {
    const testedCourses: ICourse[] = service.getCourses();
    expect(testedCourses).toEqual(mockedCourses);
  });

  it('courseById1', () => {
    const testedCourse = service.getCourseById('2');
    expect(testedCourse).toEqual({
      id: 2,
      name: 'second title course',
      date: "2017-09-28T04:39:24+00:00",
      length: 72,
      description: 'Examine a wide variety of technologies that have influenced our society significantly. Analyze the contribution\n' +
        '        these technologies make to society, associated ethical dilemmas, and critique their value to the individual and\n' +
        '        society.Initially, course descriptions are written when a new program is being developed or when developing a\n' +
        '        new course.',
      isTopRated: true,
      authors: []
    });
  });

  it('courseById2', () => {
    const testedCourse = service.getCourseById('1');
    expect(testedCourse).toEqual({
      id: 1,
      name: 'first title course',
      date: "2017-09-28T04:39:24+00:00",
      length: 32,
      description: 'Examine a wide variety of technologies that have influenced our society significantly. Analyze the contribution\n' +
        '        these technologies make to society, associated ethical dilemmas, and critique their value to the individual and\n' +
        '        society.Initially, course descriptions are written when a new program is being developed or when developing a\n' +
        '        new course.',
      isTopRated: false,
      authors: []
    });
  });

  it('added', () => {
    service.createCourse({
      id: 3,
      name: 'third title course',
      date: "2017-09-28T04:39:24+00:00",
      length: 99,
      description: 'Examine a wide variety of technologies that have influenced our society significantly. Analyze the contribution\n' +
        '        these technologies make to society, associated ethical dilemmas, and critique their value to the individual and\n' +
        '        society.Initially, course descriptions are written when a new program is being developed or when developing a\n' +
        '        new course.',
      isTopRated: false,
      authors: []
    });
    expect(mockedCourses.length).toBe(3);
  });

  it('remove', () => {
    service.removeCourse('2');
    const notFoundCourse = service.getCourseById('2');
    expect(notFoundCourse).toBe(undefined);
  });

});
