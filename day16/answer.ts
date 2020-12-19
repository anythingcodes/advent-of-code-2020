interface IRule {
  [key: string]: number[];
}

export const processInput = (input: string): string[] =>
  input.split('\n\n').map((chunk) => chunk);

const range = (length: number, startAt = 0): number[] => {
  const newArr: number[] = new Array(length).fill(null);
  return newArr.map((item, i) =>
    i + startAt);
};

export const partOne = (chunks: string[]): number => {
  const [rules, ticket: __ticket, nearbyTicketsStr] = chunks;

  const validNums = new Set();
  rules.split('\n').forEach((rule) => {
    const matches = rule.match(/(?<key>.+)(?::\s)(?<minAStr>\d+)(?:-)(?<maxAStr>\d+)(?: or )(?<minBStr>\d+)(?:-)(?<maxBStr>\d+)/);
    if (matches && matches.groups) {
      const {groups: {key: __key, minAStr, maxAStr, minBStr, maxBStr}} = matches;
      const minA = parseInt(minAStr, 10);
      const minB = parseInt(minBStr, 10);
      const fullRange = [...range(parseInt(maxAStr, 10) - minA + 1, minA), ...range(parseInt(maxBStr, 10) - minB + 1, minB)];

      fullRange.forEach((num) => {
        if (!validNums.has(num)) {
          validNums.add(num);
        }
      });
    }
  });

  return nearbyTicketsStr.split('\n').reduce((sum, ticket) => {
    if (ticket.includes('nearby')) {
      return sum;
    }
    const sumPerTicket = ticket.split(',').reduce((ticketSum, numStr) => {
      const num = parseInt(numStr, 10);
      if (!validNums.has(num)) {
        return ticketSum + num;
      }
      return ticketSum;
    }, 0);
    return sum + sumPerTicket;
  }, 0);
};

export const partTwo = (lines: string[]): number => {
  return -1;
};
