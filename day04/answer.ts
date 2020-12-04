interface IEntry {
  [property: string]: any;
  cid?: string;
}

export const processInput = (input: string): IEntry[] =>
  input.split('\n\n').map((passport) => {
    return passport.split(/[\n\s]/).reduce((acc: Record<string, string>, pair) => {
      const [key, value] = pair.split(':');
      acc[key] = value;
      return acc;
    }, {} as IEntry);
  });

const hasRequiredFields = (passport: Record<string, any>, requiredKeys: string[] = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']) => {
  return requiredKeys.every((key) => Object.keys(passport).includes(key));
};

export const partOne = (input: Record<string, string>[]) =>
  input.filter((passport) => hasRequiredFields(passport)).length;

export const partTwo = (input: Record<string, string>[]) => {
  return input.filter((passport) => {
    const isValid = hasRequiredFields(passport);
    if (!isValid) { return isValid; }
    const {byr, ecl, eyr, hcl, hgt, iyr, pid} = passport;
    // Years
    if (parseInt(byr, 10) < 1920 || parseInt(byr, 10) > 2002) { return false; }
    if (parseInt(iyr, 10) < 2010 || parseInt(iyr, 10) > 2020) { return false; }
    if (parseInt(eyr, 10) < 2020 || parseInt(eyr, 10) > 2030) { return false; }
    if (!hgt.match(/cm/) && !hgt.match(/in/)) { return false; }
    if (hgt.match(/cm/) && (parseInt(hgt, 10) < 150 || parseInt(hgt, 10) > 193)) { return false; }
    if (hgt.match(/in/) && (parseInt(hgt, 10) < 59 || parseInt(hgt, 10) > 79)) { return false; }
    if (!hcl.match(/#[0-9a-f]{6}/)) { return false; }
    if (!['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(ecl)) { return false; }
    if (!pid.match(/^[0-9]{9}$/)) { return false; }
    return true;
  }).length;
};
