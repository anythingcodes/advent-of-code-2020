interface IEntry {
  first: number;
  second: number;
  char: string;
  pass: string;
}
export const processInput = (input: string): IEntry[] => {
  return input.split('\n').map((x) => {
    const [policy, pass] = x.split(':');
    const [counts, char] = policy.split(' ');
    const [first, second] = counts.split('-').map((y) => parseInt(y, 10));
    return {first, second, char, pass};
  });
};

export const partOne = (input: IEntry[]) => {
  return input.reduce((curr, x) => {
    const charCount = x.pass.replace(new RegExp(`[^${x.char}]`, 'g'), '').length;
    return charCount >= x.first && charCount <= x.second ? curr + 1 : curr;
  }, 0);
};

export const partTwo = (input: IEntry[]) => {
  return input.reduce((curr, x) => {
    const passArray = x.pass.split('');
    if (passArray[x.first] === x.char && passArray[x.second] !== x.char) {
      return curr + 1;
    } else if (passArray[x.first] !== x.char && passArray[x.second] === x.char) {
      return curr + 1;
    }
    return curr;
  }, 0);
};
