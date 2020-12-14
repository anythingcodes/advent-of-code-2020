export const processInput = (input: string): string[] =>
  input.split('\n').map((line) => line);

const applyMask = (mask: string[], value: string): number => {
  const valueArr = value.split('');
  const result = mask.reduce((acc, char, i) => {
    if (char !== 'X') {
      acc[i] = char;
    }
    return acc;
  }, valueArr).join('');
  return parseInt(result, 2);
};

export const partOne = (lines: string[]): number => {
  let mask = lines[0].split('');
  const memory : Record<string, number> = {};
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
        memory[address] = result;

        // console.log(`Writing decimal val ${decimalValStr} (binary ${value}) to memory address ${address} results in ${memory[address]}`);

      }
    }
  }
  return Object.values(memory).reduce((sum, value) : number => value + sum, 0);
};

export const partTwo = (input: string[]): number => {
  return 0;
};
