import { TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';
import { courses } from "../mockArrays/mockCourses";

describe('CoursesService', () => {
  let service: CoursesService;
  let mockedCourses = courses;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getCourses', () => {
    const testedCourses = service.getCourses()
    expect(testedCourses).toEqual(mockedCourses);
  });

  it('courseById1', () => {
    const testedCourse = service.getCourseById('1');
    expect(testedCourse).toBe(mockedCourses[0])
  });

  it('courseById2', () => {
    const testedCourse = service.getCourseById('2');
    expect(testedCourse).toBe(mockedCourses[1])
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
    expect(mockedCourses.length).toBe(3)
  });

  it('remove', () => {
    service.removeCourse('2');
    const notFoundCourse = service.getCourseById('2')
    expect(notFoundCourse).toBe(undefined)
  });

});
