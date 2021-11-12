import { DurationPipe } from "./duration.pipe";

describe('DurationPipe', () => {

  const pipe = new DurationPipe();

  const duration1 = -6;
  const duration2 = 0;
  const duration3 = 15;
  const duration4 = 60;
  const duration5 = 65;

  it('transforms by duration negative number', () => {
    expect(pipe.transform(duration1)).toEqual(`duration must be positive real number`);
  });

  it('transforms by duration zero', () => {
    expect(pipe.transform(duration2)).toEqual(`duration must be positive real number`);
  });

  it('transforms by duration only min', () => {
    expect(pipe.transform(duration3)).toEqual(`15 min`);
  });

  it('transforms by duration only hours', () => {
    expect(pipe.transform(duration4)).toEqual(`1 h`);
  });

  it('transforms by duration mins and hours', () => {
    expect(pipe.transform(duration5)).toEqual(`1 h 5 min`);
  });


});
