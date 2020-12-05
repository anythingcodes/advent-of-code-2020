import {getFile} from "../utils/getInput";

import {partOne, partTwo, processInput} from "./answer";


// eslint-disable-next-line no-undef
const SAMPLE_INPUT = processInput(getFile(__dirname, 'input-sample.txt'));
// eslint-disable-next-line no-undef
const QUESTION_INPUT = processInput(getFile(__dirname, 'input.txt'));

describe('Part One', () => {
  it('returns 514579 for sample input.', () => {
    expect(partOne(SAMPLE_INPUT)).toBe(514579);
  });
  it('returns 1006875 for question input', () => {
    expect(partOne(QUESTION_INPUT)).toBe(1006875);
  });
});

describe('Part Two', () => {
  it('returns 241861950 for sample input.', () => {
    expect(partTwo(SAMPLE_INPUT)).toBe(241861950);
  });
  it('returns 165026160 for question input', () => {
    expect(partTwo(QUESTION_INPUT)).toBe(165026160);
  });
});
