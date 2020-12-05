export const processInput = (input: string): number[] =>
   input.split('\n').map((x) => parseInt(x, 10));

const findSum = (array: number[], startIndex: number, sum: number, count: number = 2) : number[] => {
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (count > 2) {
      const searchResult = findSum(array, i + 1, sum - num, count - 1);
      if (searchResult) {
        return [num, ...searchResult];
      }
    } else if (count === 2) {
      for (let j = startIndex + 1; j < array.length; j++) {
        if (num + array[j] === sum) {
          return [num, array[j]];
        }
      }
    } else {
      throw new Error("findSum: Invalid count");
    }
  }
  return null as any;
};

export const partOne = (input: number[]) => {
  const [varA, varB] = findSum(input, 0, 2020, 2);
  return varA * varB;
};

export const partTwo = (input: number[]) => {
  const [varA, varB, varC] = findSum(input, 0, 2020, 3);
  return varA * varB * varC;
};

