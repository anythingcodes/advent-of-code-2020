import memoize from 'fast-memoize';

export const processInput = (input: string): string[] => {
  return input.split('\n').map((line) => line);
};

const _getTreeCount = (input: string[], x: number, y:number) => {
  const [{length: columns}] = input;
  let currentRow = 0;
  let currentColumn = 0;
  let treeCount = 0;
  while (currentRow < input.length) {
    if ((input[currentRow].charAt(currentColumn % columns)) === '#') {
      treeCount++;
    }
    currentRow += y;
    currentColumn += x;
  }
  return treeCount;
};

const getTreeCount = memoize(_getTreeCount);

export const partOne = (input: string[], x: number, y:number) => {
  return getTreeCount(input, x, y);
};

export const partTwo = (input: string[]) => {
  return getTreeCount(input, 1, 1) * getTreeCount(input, 3, 1) * getTreeCount(input, 5, 1) * getTreeCount(input, 7, 1) * getTreeCount(input, 1, 2);
};
