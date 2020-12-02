const fs = require('fs');
const path = require('path');
const readline = require('readline');


async function processLineByLine() {
  const fileStream = fs.createReadStream(path.join(__dirname, 'input.txt'));

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  // TODO: memoize
  function isValidByOccurrence(min: number, max: number, char: string, pw: string) : boolean {
    const pwArr : string[] = pw.split('');
    let charCount = 0;
    if (min > max) { // TODO: also check for negative
      return false;
    }
    for (let i = 0; i < pwArr.length; i++) {
      if (pwArr[i] === char) {
        charCount++;
      }
      if (charCount > max) {
        return false;
      }
    }
    if (charCount >= min && charCount <= max) {
      return true;
    }
    return false;
  }

  function isValidByPosition(first: number, second: number, char: string, pw: string) : boolean {
    const pwArr : string[] = pw.split('');
    const firstIndex = first - 1;
    const secondIndex = second - 1;

    // TODO: Check for invalid positions
    const firstCharMatches = (pwArr[firstIndex] === char);
    const secondCharMatches = (pwArr[secondIndex] === char);

    if (firstCharMatches !== secondCharMatches) {
      return true;
    }
    return false;
  }

  const validResults = [];

  for await (const line of rl) {
    const [policy, password] = line.split(': ');
    const [range, characterTemp] = policy.split(' ');
    const character = characterTemp.trim();
    const [firstTemp, secondTemp] = range.split('-');
    const first = parseInt(firstTemp, 10); // TODO: error handling
    const second = parseInt(secondTemp, 10); // TODO: error handling
    // PART ONE
    // if (isValidByOccurrence(first, second, character, password)) {
    //   validResults.push(password);
    // } else {
    //   console.log(`${password} is invalid according to ${policy}`);
    // }
    if (isValidByPosition(first, second, character, password)) {
      validResults.push(password);
    } else {
      console.log(`${password} is invalid according to ${policy}`);
    }
  }
  console.log(validResults.length);
}

processLineByLine();
