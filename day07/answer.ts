export const processInput = (input: string): string[] =>
input.split('\n').map((rule) => rule);

const getConstraints = (rules: string[]) => {
  const ruleRegex = /(?<bagKeyStr>^.*?\s(?=contain ))(?:contain )(?<contentsStr>.*)\./i;
  const constraintsRegex = /(?<quantityStr>^\d+)(?:\s)(?<constraintKey>.+bag)/i;
  const constraints : Record<string, Record<string, number>[]> = rules.reduce((acc, rule) => {
    const ruleMatch = rule.match(ruleRegex);

    if (ruleMatch && ruleMatch.groups) {
      const {groups: {bagKeyStr, contentsStr}} = ruleMatch;
      const bagKey = bagKeyStr.replace(/s\s*$/, '');
      const contents = contentsStr.split(', ').map((content) => {
        const constraintsMatch = content.match(constraintsRegex);
        if (constraintsMatch && constraintsMatch.groups) {
          const {groups: {constraintKey}} = constraintsMatch;
          // const quantity = parseInt(quantityStr, 10); // <- didn't use
          return constraintKey;
        }
        return null;
      });
      acc[bagKey] = contents;
    }
    return acc;
  }, {} as any);
  return constraints;
};


export const partOne = (rules: string[], query : string) => {
  const constraints = getConstraints(rules);
  const bags = [query];
  const keys = Object.keys(constraints);
  for (let i = 0; i < bags.length; i++) {
    for (let j = 0; j < keys.length; j++) {
      const bag = bags[i];
      if (constraints[keys[j]].indexOf(bag) > -1 && !bags.includes(keys[j])) {
        bags.push(keys[j]);
      }
    }
  }
  return bags.length - 1;
};
