
export const getTurnCount = (startingNumbers: number[], length: number = 2020) => {
  let prevNum = startingNumbers[startingNumbers.length - 1];
  const turns = new Array(length);
  startingNumbers.forEach((num, i) => { turns[num] = i + 1; });

  for (let i = startingNumbers.length; i < length; i++) {
    const next = turns[prevNum] ? i - turns[prevNum] : 0;
    turns[prevNum] = i;
    prevNum = next;
  }
  return prevNum;
};
