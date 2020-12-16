export const partOne = (startingNumbers: number[]): number => {
  const turns: number[] = [...startingNumbers];

  for (let i = turns.length; i < 2020; i++) {
    const prevNum = turns[i - 1];
    const lastIndex = turns.lastIndexOf(prevNum, turns.length - 2);

    if (lastIndex > -1) {
      turns.push(i - (lastIndex + 1));
    } else {
      turns.push(0);
    }
  }
  return turns[turns.length - 1];
};

// export const partTwo = (lines: string[]): number => {
//   let mask: string;
//   const memory: {[index: string]: number} = {};

//   for (const line of lines) {
//     const parsedMask = line.match(/^mask = (?<mask>[01X]+)$/);
//     if (parsedMask && parsedMask.groups) {
//       mask = parsedMask.groups.mask.split("").reverse().join("");
//       continue;
//     }

//     const parsedAssignment = line.match(/^mem\[(?<index>\d+)\] = (?<value>\d+)$/);
//     if (!parsedAssignment || !parsedAssignment.groups) {
//       throw new Error(`Invalid line "${line}"`);
//     }

//     const addresses = calculateAddresses(mask!, memory, Number(parsedAssignment.groups.index).toString(2).split("")
// .reverse());
//     const value = Number(parsedAssignment.groups.value);
//     for (const address of addresses) {
//       memory[address] = value;
//     }
//   }

//   const mapped = Object.keys(memory).map((address) => memory[address]);
//   return mapped.reduce((sum, prev) => sum + prev, 0);

// };
