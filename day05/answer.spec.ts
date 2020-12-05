import {getFile} from "../utils/getInput";

import {partOne, partTwo, processInput} from "./answer";

// eslint-disable-next-line no-undef
const SAMPLE_INPUT = processInput(getFile(__dirname, 'input-sample.txt'));
// eslint-disable-next-line no-undef
const QUESTION_INPUT = processInput(getFile(__dirname, 'input.txt'));

describe('Part One', () => {
  it('returns correct answer for sample input.', () => {
    expect(partOne(SAMPLE_INPUT)).toBe(820);
  });

  it('returns correct answer for question input', () => {
    expect(partOne(QUESTION_INPUT)).toBe(908);
  });
});

describe('Part Two', () => {
  it('returns representation of nothing for sample input.', () => {
    expect(partTwo(SAMPLE_INPUT)).toBe(-1);
  });
  it('returns correct answer for question input', () => {
    expect(partTwo(QUESTION_INPUT)).toBe(619);
  });
});
