import { FilterPipe } from "./filter.pipe";
import { ICourse } from "../models/Course";

describe('FilterPipe', () => {

  const pipe = new FilterPipe();

  let courses: ICourse[] = [{
    id: 1,
    name: 'first title course',
    date: "2017-09-28T04:39:24+00:00",
    length: 32,
    description: 'Examine a wide variety of technologies that have influenced our society significantly. Analyze the contribution\n' +
      '        these technologies make to society, associated ethical dilemmas, and critique their value to the individual and\n' +
      '        society.Initially, course descriptions are written when a new program is being developed or when developing a\n' +
      '        new course.',
    authors: [
      {
        "id": 9926,
        "name": "Burt",
        "lastName": "Holland"
      }
    ],
    isTopRated: false
  },
    {
      id: 2,
      name: 'second title course',
      date: "2017-09-28T04:39:24+00:00",
      length: 72,
      description: 'Examine a wide variety of technologies that have influenced our society significantly. Analyze the contribution\n' +
        '        these technologies make to society, associated ethical dilemmas, and critique their value to the individual and\n' +
        '        society.Initially, course descriptions are written when a new program is being developed or when developing a\n' +
        '        new course.',
      authors: [],
      isTopRated: true
    }
  ];

  it('transforms for searching', () => {
    expect(pipe.transform(courses, 'FirSt TiTlE')).toEqual([{
      id: 1,
      name: 'first title course',
      date: "2017-09-28T04:39:24+00:00",
      length: 32,
      description: 'Examine a wide variety of technologies that have influenced our society significantly. Analyze the contribution\n' +
        '        these technologies make to society, associated ethical dilemmas, and critique their value to the individual and\n' +
        '        society.Initially, course descriptions are written when a new program is being developed or when developing a\n' +
        '        new course.',
      authors: [
        {
          "id": 9926,
          "name": "Burt",
          "lastName": "Holland"
        }
      ],
      isTopRated: false
    }]);
  });


});
