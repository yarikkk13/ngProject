import { ICourse } from "../models/Course";

export const courses: ICourse[] = [
    {
      id: 1,
      name: 'first title course',
      date: "2017-09-28T04:39:24+00:00",
      length: 32,
      description: 'Examine a wide variety of technologies that have influenced our society significantly. Analyze the contribution\n' +
        '        these technologies make to society, associated ethical dilemmas, and critique their value to the individual and\n' +
        '        society.Initially, course descriptions are written when a new program is being developed or when developing a\n' +
        '        new course.',
      isTopRated: false,
      authors: [
        {
          "id": 9926,
          "name": "Burt",
          "lastName": "Holland"
        },
        {
          "id": 6440,
          "name": "Andrews",
          "lastName": "Byers"
        },
        {
          "id": 8509,
          "name": "Shawn",
          "lastName": "Craig"
        }
      ]
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
      authors:
        [
          {
            "id": 9926,
            "name": "Burt",
            "lastName": "Holland"
          }
        ]
    }
  ]
;
