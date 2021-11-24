/****************************
 * The Complete JavaScript Course: From Zero to Expert!
 *  Section: Fundamentals JS Part 2
 * Course taken by: Ankur Patel
 * Start: November 17st, 2021
****************************/

// Strict Mode Activation
'use strict';

/*
let hasDriversLicense = false;
const passedTest = true;

if (passedTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can Drive!');

// using 'use strict' will prevent reserved words that may be implented later
// const interface = 'audio';
// const private = 123;
*/

/*
// Functions

function logger() {
  console.log('My name is Ankur');
}

// Calling/Running/Invoking a function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice made from ${ apples } apples and ${ oranges } oranges!`;
  return juice;
}

const appleJuice = fruitProcessor(4, 7);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(0, 2);
console.log(appleOrangeJuice);
*/

// Function Declaration vs Expressions

// Function Declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1996);

// Anonymous Function
// Function Expression, expressions return values
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge2(1996);

// console.log(age1, age2)

/*

// Arrow Functions

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1996);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${ firstName } has ${ retirement } years left before retirement!`;
}

console.log(yearsUntilRetirement(1996, 'Ankur'));
*/

/*
//Functions Calling Other Functions

function fruitProcessor(apples, oranges) {
  const applePieces = fruitSlicer(apples);
  const orangePieces = fruitSlicer(oranges);

  const juice = `Juice made from ${ applePieces } apple slices and ${ orangePieces } orange slices!`;
  return juice;
}

function fruitSlicer(fruit) {
  return fruit * 4;
}

const smoothie = fruitProcessor(2, 4);
console.log(smoothie);
*/

// Functions review

const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${ firstName } has ${ retirement } years left before retirement!`);
    return retirement;
  } else {
    return -1;
  }
}

console.log(yearsUntilRetirement(1996, 'Ankur'));
console.log(yearsUntilRetirement(1998, 'Serena'));

console.log(calcAge(1996));
