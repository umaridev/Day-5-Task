// 1. Declare all 7 primitive types and log their types:
const primString = "Hello, world";
const primNumber = 123;
const primBoolean = true;
const primBigInt = 9007199254740991n;     // BigInt ends with 'n'
const primSymbol = Symbol("id");
const primNull = null;
let primUndefined;                        // no assignment → undefined

console.log(
  typeof primString,   // "string"
  typeof primNumber,   // "number"
  typeof primBoolean,  // "boolean"
  typeof primBigInt,   // "bigint"
  typeof primSymbol,   // "symbol"
  typeof primNull,     // "object" (special JS case)
  typeof primUndefined // "undefined"
);

// 2. Declare an object and an array, then log their types:
const myObject = { name: "Ali", age: 30 };
const myArray = [10, 20, 30];

console.log(typeof myObject); // "object"
console.log(typeof myArray);  // "object" — arrays are also objects in JS

// 3. Reassign let vs. trying to reassign const, log the error:
let myLet = "start value";
console.log("Before:", myLet);
myLet = "changed value";        // OK
console.log("After:", myLet);

const myConst = "fixed value";
console.log("Const before reassign:", myConst);
try {
  myConst = "new value";        // This will throw an error
} catch (e) {
  console.log("Error reassigning const:", e.message);
}

// 4. Calculate the area of a circle using const for pi:
const pi = Math.PI;
let radius = 5;
const area = pi * radius * radius;
console.log("Circle radius:", radius);
console.log("Area of circle:", area);

//Second Mini project task 2
// Ask for Name (string)
const name = prompt("Enter your name:");

// Ask for Age, then convert it to a number
const ageInput = prompt("Enter your age:");
const age = Number(ageInput);

// Ask if the user is an intern (yes/no), convert to boolean
const isInternAnswer = prompt("Are you an intern? (yes/no):");
const isIntern = isInternAnswer.trim().toLowerCase() === "yes";

// Create the intern object using collected data
const intern = { name, age, isIntern };

// Output the Intern Info Card
console.log("--- Intern Info Card ---");
console.log("Name:", intern.name);
console.log("Age:", intern.age);
console.log("Is Intern:", intern.isIntern);
