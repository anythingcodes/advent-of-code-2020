import {getFile} from "../utils/getInput";

import {partOne, partTwo, processInput} from "./answer";

// eslint-disable-next-line no-undef
const SAMPLE_INPUT = processInput(getFile(__dirname, 'input-sample.txt'));
// eslint-disable-next-line no-undef
const QUESTION_INPUT = processInput(getFile(__dirname, 'input.txt'));

describe('Part One', () => {
  it('returns 7 for sample input.', () => {
    expect(partOne(SAMPLE_INPUT, 3, 1)).toBe(7);
  });

  it('returns 254 for question input', () => {
    expect(partOne(QUESTION_INPUT, 3, 1)).toBe(254);
  });
});

describe('Part Two', () => {
  it('returns 336 for sample input.', () => {
    expect(partTwo(SAMPLE_INPUT)).toBe(336);
  });
  it('returns correct result for question input', () => {
    expect(partTwo(QUESTION_INPUT)).toBe(1666768320);
  });
});
