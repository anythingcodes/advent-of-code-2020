import {getFile} from "../utils/getInput";

import {partOne, processInput} from "./answer";

// eslint-disable-next-line no-undef
const SAMPLE_INPUT = processInput(getFile(__dirname, 'input-sample.txt'));
// eslint-disable-next-line no-undef
const QUESTION_INPUT = processInput(getFile(__dirname, 'input.txt'));

describe('Part One', () => {
  it('returns correct answer for sample input.', () => {
    expect(partOne(SAMPLE_INPUT, 'shiny gold bag')).toBe(4);
  });

  it('returns correct answer for question input', () => {
    expect(partOne(QUESTION_INPUT, 'shiny gold bag')).toBe(177);
  });
});
