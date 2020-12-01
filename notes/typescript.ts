// Boolean
const isAdmin: boolean = true;
// Number
const age: number = 33;
const hexadecimal: number = 0xa00f;
const binary: number = 0b1100;
// String
const user: string = 'Liz';

// Array
const numbers: number[] = [0, 1, 2];
const names: string[] = ['liz', 'queso'];
// Alternate way to create array
const digits: Array<number> = [0, 1];
// Array of mixed types
const mixed: (string|number)[] = [1, 'liz', 2, 'queso'];
const mixedArr: Array<string|number> = [0, 'liz'];

// Tuple (express array where type of a fixed number of els is known)
let mix: [string, number]; // order matters
mix = ['liz', 0]; // Type `mix[0].` for intellisense list of String methods or `mix[1].` for Number methods

// Enum
enum Cardtype { Hearts, Diamonds, Spades, Clubs }; // hover mouse over each to see index
let myCard: Cardtype = Cardtype.Hearts;
let cardName: string = Cardtype[2];

// The Any data type - opt in or out of type-checking
const data: any = 4;
const anyMix: any[] = [1, 'queso', false];

// Never - represents the type of values that can never be observed; throwing exception or failing to terminate
function error(): never {
  throw new Error("error!");
}
function fail() { // type inferred as never
  return error();
}
// Infinite loops also never return:
// function infinite(): never {
//   while(true) { }
// }

// Null and undefined
let test: undefined = undefined;
let test2: null = null;
let testNum: number = 1;
testNum = undefined; // no errors shown unless strictNullChecks:true in tsconfig

// Void - only used on functions where function is not returning anything - can be resolved without value
function greet(name): void {
  console.log(`Hello ${name}!`);
  // return ''; // would throw error when func type is void
}

// Function param and return types
function sayHello(name: string): string {
  return `Hello ${name}!`;
}

// Type alias - create new name for referring to a type -> diff from interfaces
type User = {
  name: string,
  age: number
};
const myUser: User = {
  name: 'Queso',
  age: 3
};

// Type assertions -> tell compiler we're 100% certain about the type of a certain variable
const someUser = {};
someUser.age = 35; // Compiler complains since property doesn't yet exist
const anotherUser: User = {};
anotherUser.age = 35; // Compiler complains about missing `name` property
const assertedUser = {};
(assertedUser as User).age = 35; // 🎉 No warnings!
(<User>assertedUser).age = 35; // 🎉 Alternate method

// Objects
const person = {};
person.age = 33; // TS complains that property doesn't exist
const users: { name: string, age: number }[] = [
  {
    name: 'Liz',
    age: 100
  },
  {
    name: 'Queso',
    age: 23
  }
];

// Interfaces -> provide a way to define an entity that must conform to a definition, e.g. nouns
interface IUser {
  name: string;
  readonly age: number;
  address?: string; // optional with ?
}

let coolUser: IUser = {
  name: 'John',
  age: 33,
}

coolUser.age = 40; // Can't be overwritten

// Function interface
interface IGreet {
  (name: string, language: string): string
}
let hello: IGreet;
hello = function(n: string, lang: string) {
  if (lang === 'en') {
    return `Hello ${n}!`;
  } else {
    return `Hola ${n}!`;
  }
}
hello('Liz', 'en');

// Type alias vs. Interface
//  1. Interface can use `extends` and `implements` keywords
//  2. Interface can have multiple merged declarations
interface Acct {
  username: string;
  age: number;
}
interface Acct {
  address: string; // merged declarations -> would not merge with `type` alias
}
let userX: Acct = {
  username: 'meow',
  age: 1,
  address: '5 Cool Street'
}

// Extends keyword in interfaces -> copies members of previous interface
interface IPerson {
  name: string;
}
interface IHero extends IPerson {
  superpower: string;
}
let regularJoe: IPerson = {
  name: 'John'
}
let batman: IHero = {
  name: 'Bruce',
  superpower: 'money'
}

// Interface index signature ->
interface IUser {
  // Merge w/previous interface and add new property
  [property: string]: any; // now can add any number of properties with any number of values
}
let adminUser: IUser = {
  name: 'Liz',
  age: 1,
  test: 1,
  abc: 'xyz'
}
adminUser.test;

// Optional function params
function sayHola(name: string, language: string = 'es', exclamationMark?: string): string {
  if (language === 'es') {
    return `Hola ${name}${exclamationMark}`;
  } else if (language === 'en') {
    return `Hello ${name}${exclamationMark}`;
  } else {
    return `Yo, ${name}${exclamationMark}`;
  }
}
sayHola('John');
sayHola('John', 'en');
sayHola('John', 'en', '!');

// Classes
class Person {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet(): string {
    return `Hello ${this.name}`;
  }
}
let myPerson = new Person('John');
myPerson.greet();
// Extending a class
class Hero extends Person {
  superpowers: string[] = [];
  constructor(name: string) {
    super(name);
  }
  addPower(power: string): void {
    this.superpowers.push(power);
  }
  listPowers(): string[] {
    return this.superpowers;
  }
  greet(): string { // Override Person greet()
    return `Yo, whassup ${this.name}`; // Warning -> Four access modifiers: public (the default), protected, private, & readonly; protected can be accessed in containing class and all sub-classes
  }
}
let batman2 = new Hero('Bruce');
batman2.addPower('money');
console.log(batman2.listPowers());

// Classes can implement interfaces
interface IHuman {
  name: string;
}
class Human implements IHuman {
  name: string; // If this is commented out, will get a warning -> use interfaces to ensure classes implement members as interface specifies
}

// Abstract classes and methods -> class specify how inherited class should implement class itself
abstract class HumanBeing {
  public name: string;
  public age: number;
  constructor(name: string) {
    this.name = name;
  }
  abstract greet(): void; // need abstract keyword for methods
}

// const john = new HumanBeing(); // Can't create instance of abstract class
class CoolHuman extends HumanBeing {
  constructor(name: string) {
    super(name);
  }
  greet(): void {
    console.log('Hi');
  }
}

const john = new CoolHuman('John'); // 🎉 Works after extending abstract class
john.greet();

// Generics
function pickNumber(numbers: number[]): number {
  const randomIndex = Math.floor(Math.random() * numbers.length);
  return numbers[randomIndex];
}
const numbersArr = [...Array(13).keys()];
const pickedNumber = pickNumber(numbers);
console.log(pickedNumber);
function pickSuit(suits: string[]): string {
  // pickNumber+pickSuit implementations are the same
  const randomIndex = Math.floor(Math.random() * suits.length);
  return suits[randomIndex];
}
const suits = ['diamonds', 'clubs', 'hearts', 'spades'];
const pickedSuit = pickSuit(suits);
console.log(pickedSuit);
// capital T is the standard
function picker<T>(args: T[]): T {
  const randomIndex = Math.floor(Math.random() * args.length);
  return args[randomIndex];
}
const pickedNumber2: number = picker(numbers);
const pickedSuit2: string = picker(suits);
console.log(`Your card is: ${pickedNumber2} ${pickedSuit2}`);
