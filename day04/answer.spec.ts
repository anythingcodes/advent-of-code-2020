import {getFile} from "../utils/getInput";

import {partOne, partTwo, processInput} from "./answer";

// eslint-disable-next-line no-undef
const SAMPLE_INPUT = processInput(getFile(__dirname, 'input-sample.txt'));
// eslint-disable-next-line no-undef
const QUESTION_INPUT = processInput(getFile(__dirname, 'input.txt'));

describe('Part One', () => {
  it('returns 2 for sample input.', () => {
    expect(partOne(SAMPLE_INPUT)).toBe(2);
  });

  it('returns 196 for question input', () => {
    expect(partOne(QUESTION_INPUT)).toBe(196);
  });
});

describe('Part Two', () => {
  it('returns 2 for sample input.', () => {
    expect(partTwo(SAMPLE_INPUT)).toBe(2);
  });
  it('returns 114 for question input', () => {
    expect(partTwo(QUESTION_INPUT)).toBe(114);
  });
});