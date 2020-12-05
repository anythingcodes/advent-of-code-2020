interface IEntry {
  row: number;
  column: number;
  seatId: number;
}

export const processInput = (input: string): string[] =>
  input.split('\n').map((coordinate) => coordinate);

const getSeatId = (row: number, column: number) : number =>
  (8 * row) + column;

const getCoordinates = (coordinate: string): IEntry => {
  const range = {
    minRow: 0,
    maxRow: 127,
    minCol: 0,
    maxCol: 7,
  };
  coordinate.split('').forEach((char) => {
    if (char === 'F') {
      range.maxRow = Math.floor((range.maxRow + range.minRow) / 2);
    } else if (char === 'B') {
      range.minRow = Math.round((range.maxRow + range.minRow) / 2);
    } else if (char === 'R') {
      range.minCol = Math.round((range.minCol + range.maxCol) / 2);
    } else if (char === 'L') {
      range.maxCol = Math.floor((range.minCol + range.maxCol) / 2);
    }
  });
  return {
    row: range.maxRow,
    column: range.maxCol,
    seatId: getSeatId(range.maxRow, range.maxCol),
  };
};


export const partOne = (input: string[]) => {
  return input.reduce((maxSeatId: number, coordinate) => {
    const {seatId} = getCoordinates(coordinate);

    if (seatId > maxSeatId) {
      return seatId;
    }
    return maxSeatId;
  }, 0);
};

export const partTwo = (input: string[]) : number => {
  const seatChart = new Array(128).fill('O').map(() =>
     new Array(8).fill('O'));
  const seatIds = new Set();

  input.forEach((coordinate) => {
    const {column, row, seatId} = getCoordinates(coordinate);
    seatChart[row][column] = 'X';
    seatIds.add(seatId);
  });

  for (let row = 0; row < seatChart.length; row++) {
    for (let col = 0; col < seatChart[0].length; col++) {
      if (seatChart[row][col] === 'O') {
        const id = getSeatId(row, col);
        if (seatIds.has(id - 1) && seatIds.has(id + 1)) {
          return id;
        }
      }
    }
  }

  return -1;
};
