import {partOne} from "./answer";

describe('Part One', () => {
  it('returns correct answer for sample input.', () => {
    expect(partOne([0, 3, 6])).toBe(436);
    expect(partOne([1, 3, 2])).toBe(1);
    expect(partOne([2, 1, 3])).toBe(10);
    expect(partOne([1, 2, 3])).toBe(27);
    expect(partOne([2, 3, 1])).toBe(78);
    expect(partOne([3, 2, 1])).toBe(438);
    expect(partOne([3, 1, 2])).toBe(1836);
  });

  it('returns correct answer for question input', () => {
    expect(partOne([15, 5, 1, 4, 7, 0])).toBe(1259);
  });
});

describe('Part Two', () => {
  // it('returns correct answer for sample input.', () => {
  //   expect(partTwo(SAMPLE_INPUT_2)).toBe(208);
  // });

  // it('returns correct result for question input', () => {
  //   const result = partTwo(QUESTION_INPUT);
  //   expect(result).toBe(2667858637669);
  // });

});
