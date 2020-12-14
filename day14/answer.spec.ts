import {getFile} from "../utils/getInput";

import {partOne, partTwo, processInput} from "./answer";

// eslint-disable-next-line no-undef
const SAMPLE_INPUT = processInput(getFile(__dirname, 'input-sample.txt'));
// eslint-disable-next-line no-undef
const QUESTION_INPUT = processInput(getFile(__dirname, 'input.txt'));

describe('Part One', () => {
  it('returns correct answer for sample input.', () => {
    expect(partOne(SAMPLE_INPUT)).toBe(165);
  });

  it('returns correct answer for question input', () => {
    expect(partOne(QUESTION_INPUT)).toBe(8471403462063);
  });
});

// describe('Part Two', () => {
//   it('returns correct answer for sample input.', () => {
//     expect(partTwo(SAMPLE_INPUT[1])).toBe("1068781");
//   });

//   it('returns correct answer for sample input.', () => {
//     expect(partTwo('17,x,13,19'.split(','))).toBe("3417");
//   });

//   it('returns correct answer for sample input.', () => {
//     expect(partTwo('67,x,7,59,61'.split(','))).toBe("779210");
//   });

//   it('returns correct answer for sample input.', () => {
//     expect(partTwo('67,7,x,59,61'.split(','))).toBe("1261476");
//   });

//   it('returns correct answer for sample input.', () => {
//     expect(partTwo('1789,37,47,1889'.split(','))).toBe("1202161486");
//   });

//   it('returns correct result for question input', () => {
//     const result = partTwo(QUESTION_INPUT[1]);
//     expect(result).toBe("53403653563631");
//   });

// });
