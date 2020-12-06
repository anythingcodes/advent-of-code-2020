export const processInput = (groupInput: string): string[] =>
groupInput.split('\n\n').map((group) => group);

export const partOne = (groupInput: string[]) => {
  return groupInput.reduce((acc: number, group: string): number => {
    const formsStr = group.replace(/\n/g, '').split('').filter((char, index, arr) =>
      arr.indexOf(char) === index);
    return acc + formsStr.length;
  }, 0);
};

export const partTwo = (groupInput: string[]) => {
  const groupForms = groupInput.map((form) : Set<string> => {
    return form
      .replace(/\n/g, '')
      .split('')
      .reduce((curr, y) => {
        curr.add(y);
        return curr;
      }, new Set<string>());

  }).map((set) => Array.from(set));
  return groupInput.map((indivResponse, i) => {
    const form = indivResponse.split(/\n/).map((answers) => {
      // TODO: DRYify
      return answers
        .replace(/\n/g, '')
        .split('')
        .reduce((acc, answer) => {
          acc.add(answer);
          return acc;
        }, new Set<string>());
    });
    return groupForms[i].filter((answer) => form.every((options) => options.has(answer))).length;
  }).reduce((curr, groupAnswer) => curr + groupAnswer, 0);
};
