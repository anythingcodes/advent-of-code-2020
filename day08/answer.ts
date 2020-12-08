export const processInput = (input: string): string[] =>
input.split('\n').map((line) => line);

const getInstruction = (line: string) : {cmd: string | null, pos: number | null} => {
  const lineRegex = /(?<cmd>\w*)(?:\s)(?<posStr>[+|-]\d+)/i;
  const match = lineRegex.exec(line);

  if (match && match.groups) {
    const {groups: {cmd, posStr}} = match;
    const pos = parseInt(posStr, 10);
    return {
      cmd,
      pos,
    };
  }
  return {cmd: null, pos: null};
};

export const partOne = (lines: string[]) => {
  const visitedCommands = new Set();
  let acc = 0;
  let i = 0;

  while (i > -1) {
    if (visitedCommands.has(i)) {
      i = -1;
    } else {
      visitedCommands.add(i);
    }

    const {cmd, pos} = getInstruction(lines[i]);
    if (pos !== null) {
      if (cmd === 'acc') {
        acc += pos;
        i++;
      } else if (cmd === 'nop') {
        i++;
      } else if (cmd === 'jmp') {
        i += pos;
      }
    }
  }
  return acc;

};

export const partTwo = (lines: string[]): number => {
  for (let i = 0; i < lines.length; i++) {
    const linesClone = [...lines];
    if (linesClone[i].includes('nop')) {
      linesClone[i] = linesClone[i].replace('nop', 'jmp');
    } else if (linesClone[i].includes('jmp')) {
      linesClone[i] = linesClone[i].replace('jmp', 'nop');
    }

    let acc = 0;
    let j = 0;
    const visitedCommands = new Set();

    while (j > -1) {
      if (visitedCommands.has(j)) {
        j = -1;
      }
      if (j >= linesClone.length) {
        return acc;
      }
      visitedCommands.add(j);
      const line = linesClone[j];
      const {cmd, pos} = getInstruction(line);

      if (pos !== null) {
        switch (cmd) {
          case 'nop': {
            j++;
            break;
          }
          case 'jmp': {
            j += pos;
            break;
          }
          case 'acc': {
            j++;
            acc += pos;
            break;
          }
        }
      }
    }
  }
  return 0;
};
