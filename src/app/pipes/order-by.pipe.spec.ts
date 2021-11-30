import {OrderByPipe} from "./order-by.pipe";
import {ICourse} from "../models/Course";

describe('OrderByPipe', () => {
  const pipe = new OrderByPipe();
  let courMock: ICourse[] = [{
    id: 1,
    name: 'first title course',
    date: "2017-11-18T09:06:11+00:00",
    length: 32,
    description: 'Examine a wide variety of technologies that have influenced our society significantly. Analyze the contribution\n' +
      '        these technologies make to society, associated ethical dilemmas, and critique their value to the individual and\n' +
      '        society.Initially, course descriptions are written when a new program is being developed or when developing a\n' +
      '        new course.',
    isTopRated: false,
    authors: []
  },
    {
      id: 2,
      name: 'second title course',
      date: "2016-03-18T06:36:07+00:00",
      length: 72,
      description: 'Examine a wide variety of technologies that have influenced our society significantly. Analyze the contribution\n' +
        '        these technologies make to society, associated ethical dilemmas, and critique their value to the individual and\n' +
        '        society.Initially, course descriptions are written when a new program is being developed or when developing a\n' +
        '        new course.',
      isTopRated: true,
      authors: []
    }
  ];
  it('transforms by date', () => {
    expect(pipe.transform(courMock)).toEqual([
      {
        id: 2,
        name: 'second title course',
        date: "2017-11-18T09:06:11+00:00",
        length: 72,
        description: 'Examine a wide variety of technologies that have influenced our society significantly. Analyze the contribution\n' +
          '        these technologies make to society, associated ethical dilemmas, and critique their value to the individual and\n' +
          '        society.Initially, course descriptions are written when a new program is being developed or when developing a\n' +
          '        new course.',
        isTopRated: true,
        authors: []
      },
      {
        id: 1,
        name: 'first title course',
        date: "2016-03-18T06:36:07+00:00",
        length: 32,
        description: 'Examine a wide variety of technologies that have influenced our society significantly. Analyze the contribution\n' +
          '        these technologies make to society, associated ethical dilemmas, and critique their value to the individual and\n' +
          '        society.Initially, course descriptions are written when a new program is being developed or when developing a\n' +
          '        new course.',
        isTopRated: false,
        authors: []
      },
    ]);
  });

});
