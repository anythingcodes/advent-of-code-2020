import {getTurnCount} from "./answer";

describe('Part One', () => {
  it('returns correct answer for sample input.', () => {
    expect(getTurnCount([0, 3, 6], 2020)).toBe(436);
    expect(getTurnCount([1, 3, 2])).toBe(1);
    expect(getTurnCount([2, 1, 3])).toBe(10);
    expect(getTurnCount([1, 2, 3])).toBe(27);
    expect(getTurnCount([2, 3, 1])).toBe(78);
    expect(getTurnCount([3, 2, 1])).toBe(438);
    expect(getTurnCount([3, 1, 2])).toBe(1836);
  });

  it('returns correct answer for question input', () => {
    expect(getTurnCount([15, 5, 1, 4, 7, 0])).toBe(1259);
  });
});

describe('Part Two', () => {
  it('returns correct answer for sample input.', () => {
    expect(getTurnCount([0, 3, 6], 30000000)).toBe(175594);
  });

  it('returns correct answer for sample input.', () => {
    expect(getTurnCount([1, 3, 2], 30000000)).toBe(2578);
  });

  it('returns correct answer for sample input.', () => {
    expect(getTurnCount([2, 1, 3], 30000000)).toBe(3544142);
  });

  it('returns correct answer for sample input.', () => {
    expect(getTurnCount([1, 2, 3], 30000000)).toBe(261214);
  });

  it('returns correct answer for sample input.', () => {
    expect(getTurnCount([2, 3, 1], 30000000)).toBe(6895259);
  });

  it('returns correct answer for sample input.', () => {
    expect(getTurnCount([3, 2, 1], 30000000)).toBe(18);
  });

  it('returns correct answer for sample input.', () => {
    expect(getTurnCount([3, 1, 2], 30000000)).toBe(362);
  });

  it('returns correct answer for question input.', () => {
    expect(getTurnCount([15, 5, 1, 4, 7, 0], 30000000)).toBe(689);
  });
});
