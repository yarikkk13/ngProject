import { OrderByPipe } from "./order-by.pipe";
import { courses } from "../mockArrays/mockCourses";

describe('OrderByPipe', () => {
  // This pipe is a pure, stateless function so no need for BeforeEach
  const pipe = new OrderByPipe();
  let courMock = courses;
  it('transforms by date', () => {
    expect(pipe.transform(courMock)).toEqual([
      {
        id: 2,
        title: 'second title course',
        creationTime: new Date(2021, 2, 6),
        duration: 72,
        description: 'Examine a wide variety of technologies that have influenced our society significantly. Analyze the contribution\n' +
          '        these technologies make to society, associated ethical dilemmas, and critique their value to the individual and\n' +
          '        society.Initially, course descriptions are written when a new program is being developed or when developing a\n' +
          '        new course.',
        topRated: true
      },
      {
        id: 1,
        title: 'first title course',
        creationTime: new Date(2021, 10, 6),
        duration: 32,
        description: 'Examine a wide variety of technologies that have influenced our society significantly. Analyze the contribution\n' +
          '        these technologies make to society, associated ethical dilemmas, and critique their value to the individual and\n' +
          '        society.Initially, course descriptions are written when a new program is being developed or when developing a\n' +
          '        new course.',
        topRated: false
      },
    ]);
  });

});
