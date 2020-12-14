// TODO: DRYify parts 1 and 2

export const processInput = (input: string): string[] =>
  input.split('\n').map((line) => line);

const applyMask = (mask: string[], value: string, hasFloating: boolean = false): string => {
  const valueArr = value.split('');
  return mask.reduce((acc, char, i) => {
    if (char !== 'X' || (hasFloating && char === 'X')) {
      acc[i] = char;
    }
    return acc;
  }, valueArr).join('');
};

export const partOne = (lines: string[]): number => {
  let mask : string[] = lines[0].split('');
  const memory: {[index: string]: number} = {};

  const addressRegex = /(?:mem)(?:\[)(?<addressStr>\d+)(?:\])(?: = )(?<decimalValStr>\d+)/i;
  for (let i = 0; i < lines.length; i++) {

    if (lines[i].includes('mask = ')) {
      mask = lines[i].replace('mask = ', '').split('');
    } else {
      const addressMatch = lines[i].match(addressRegex);
      if (addressMatch && addressMatch.groups) {
        const {groups: {addressStr, decimalValStr}} = addressMatch;
        const address = parseInt(addressStr, 10);

        // Convert to 36-bit binary string
        let value = parseInt(decimalValStr, 10).toString(2);
        while (value.length < 36) {
          value = `0${value}`;
        }

        const result = applyMask(mask, value);
        memory[address] = parseInt(result, 2);

        // console.log(`Writing decimal val ${decimalValStr} (binary ${value}) to memory address ${address} results in ${memory[address]}`);

      }
    }
  }
  return Object.values(memory).reduce((sum, value) : number => value + sum, 0);
};

const calculateAddresses = (mask: string, memory: {[index: string]: number}, binIndex: string[]): number[] => {
  const newIndexMasked = "000000000000000000000000000000000000".split("");
  const newIndexes: string[][] = [];
  const floatingPositions = [];

  for (let i = 0; i < mask.length; i++) {
    if (mask[i] === '0') {
      newIndexMasked[i] = binIndex[i] || "0";
    } else {
      newIndexMasked[i] = mask[i];
      if (mask[i] === 'X') {
        floatingPositions.push(i);
      }
    }
  }

  for (let i = 0; i < 2 ** floatingPositions.length; i++) {
    const bin = i.toString(2).split("");
    const newIndex = [...newIndexMasked];

    for (let j = 0; j < floatingPositions.length; j++) {
      newIndex[floatingPositions[j]] = bin[bin.length - j - 1] || "0";
    }
    newIndexes.push(newIndex);
  }

  return newIndexes.map((index) => {
    const dec = parseInt(index.reverse().join(""), 2);
    return dec;
  });
};

export const partTwo = (lines: string[]): number => {
  let mask: string;
  const memory: {[index: string]: number} = {};

  for (const line of lines) {
    const parsedMask = line.match(/^mask = (?<mask>[01X]+)$/);
    if (parsedMask && parsedMask.groups) {
      mask = parsedMask.groups.mask.split("").reverse().join("");
      continue;
    }

    const parsedAssignment = line.match(/^mem\[(?<index>\d+)\] = (?<value>\d+)$/);
    if (!parsedAssignment || !parsedAssignment.groups) {
      throw new Error(`Invalid line "${line}"`);
    }

    const addresses = calculateAddresses(mask!, memory, Number(parsedAssignment.groups.index).toString(2).split("")
.reverse());
    const value = Number(parsedAssignment.groups.value);
    for (const address of addresses) {
      memory[address] = value;
    }
  }

  const mapped = Object.keys(memory).map((address) => memory[address]);
  return mapped.reduce((sum, prev) => sum + prev, 0);

};
