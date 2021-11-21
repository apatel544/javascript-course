/****************************
 * The Complete JavaScript Course: From Zero to Expert!
 *  Section: Fundamentals JS Part 2
 * Course taken by: Ankur Patel
 * Start: November 17st, 2021
 ****************************/
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
