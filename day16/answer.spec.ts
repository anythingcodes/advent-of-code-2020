import {getFile} from "../utils/getInput";

import {partOne, partTwo, processInput} from "./answer";

// eslint-disable-next-line no-undef
const SAMPLE_INPUT = processInput(getFile(__dirname, 'input-sample.txt'));
// eslint-disable-next-line no-undef
const QUESTION_INPUT = processInput(getFile(__dirname, 'input.txt'));

describe('Part One', () => {
  it('returns correct answer for sample input.', () => {
    expect(partOne(SAMPLE_INPUT)).toBe(71);
  });

  it('returns correct answer for question input', () => {
    expect(partOne(QUESTION_INPUT)).toBe(22073);
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
