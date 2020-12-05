interface IEntry {
  varA: number;
  varB: number;
  letter: string;
  password: string;
}

export const processInput = (input: string): IEntry[] => {
  const passwordRegex = /(?<varA>\d+)-(?<varB>\d+) (?<letter>[a-z]):\s(?<password>\w{1,})/i;
  return input.split('\n').map((x) => {
    const match = x.match(passwordRegex);
    if (match && match.groups) {
      const {groups: {letter, password, varA, varB}} = match;
      return {
        letter,
        password,
        varA: parseInt(varA, 10),
        varB: parseInt(varB, 10),
      };
    }
    return {} as IEntry;
  });
};

export const partOne = (input: IEntry[]) => {
  return input.reduce((curr, x) => {
    const charCount = x.password.replace(new RegExp(`[^${x.letter}]`, 'g'), '').length;
    return charCount >= x.varA && charCount <= x.varB ? curr + 1 : curr;
  }, 0);
};

export const partTwo = (input: IEntry[]) => {
  return input.reduce((curr, x) => {
    const passArray = x.password.split('');
    if (passArray[x.varA - 1] === x.letter && passArray[x.varB - 1] !== x.letter) {
      return curr + 1;
    } else if (passArray[x.varA - 1] !== x.letter && passArray[x.varB - 1] === x.letter) {
      return curr + 1;
    }
    return curr;
  }, 0);
};
