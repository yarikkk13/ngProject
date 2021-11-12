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
      title: 'second title course',
      creationTime: new Date(2021, 2, 6),
      duration: 72,
      description: 'Examine a wide variety of technologies that have influenced our society significantly. Analyze the contribution\n' +
        '        these technologies make to society, associated ethical dilemmas, and critique their value to the individual and\n' +
        '        society.Initially, course descriptions are written when a new program is being developed or when developing a\n' +
        '        new course.',
      topRated: true
    });
  });

  it('courseById2', () => {
    const testedCourse = service.getCourseById('1');
    expect(testedCourse).toEqual({
      id: 1,
      title: 'first title course',
      creationTime: new Date(2021, 10, 6),
      duration: 32,
      description: 'Examine a wide variety of technologies that have influenced our society significantly. Analyze the contribution\n' +
        '        these technologies make to society, associated ethical dilemmas, and critique their value to the individual and\n' +
        '        society.Initially, course descriptions are written when a new program is being developed or when developing a\n' +
        '        new course.',
      topRated: false
    });
  });

  it('added', () => {
    service.createCourse({
      id: 3,
      title: 'third title course',
      creationTime: new Date(2020, 10, 6),
      duration: 99,
      description: 'Examine a wide variety of technologies that have influenced our society significantly. Analyze the contribution\n' +
        '        these technologies make to society, associated ethical dilemmas, and critique their value to the individual and\n' +
        '        society.Initially, course descriptions are written when a new program is being developed or when developing a\n' +
        '        new course.',
      topRated: false
    });
    expect(mockedCourses.length).toBe(3);
  });

  it('remove', () => {
    service.removeCourse('2');
    const notFoundCourse = service.getCourseById('2');
    expect(notFoundCourse).toBe(undefined);
  });

});
