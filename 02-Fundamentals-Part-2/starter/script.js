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
/*
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
*/
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
/*
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
*/

/*************************************************************
 * CODING CHALLENGE 1
 */
/*
const calcAverage = (score1, score2, score3) => {
  const average = (score1 + score2 + score3) / 3;
  return average;
}

//Test Data Set 1
// const dolphinScore = calcAverage(44, 23, 71);
// const koalaScore = calcAverage(65, 54, 49);
//Test Data Set 2
const dolphinScore = calcAverage(85, 54, 41);
const koalaScore = calcAverage(23, 34, 27);

console.log(dolphinScore);
console.log(koalaScore);

const checkWinner = (avrgDolphins, avrgKoalas) => {
  if (avrgDolphins >= avrgKoalas * 2) {
    console.log('Dolphins Win with an average of ' + avrgDolphins);
  } else if (avrgKoalas >= avrgDolphins * 2) {
    console.log('Koalas Win with an average of ' + avrgKoalas);
  } else {
    console.log('No one Wins... :( Dolphins Average: ' + avrgDolphins + ' and the Koalas Average: ' + avrgKoalas);
  }
}

checkWinner(dolphinScore,koalaScore);
*/

// Arrays
const friend1 = 'Ankur';
const friend2 = 'Serena';
const friend3 = 'Jax';

const friends = ['Ankur', 'Serena', 'Jax'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
// console.log(years);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Sagar';
console.log(friends);
 
// Exercise
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const years = [1990, 1967, 1958, 2003, 2020, 2015];
const age1 = calcAge1(years[0]);
const age2 = calcAge1(years[1]);
const age3 = calcAge1(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge1(years[0]), calcAge1(years[1]), calcAge1(years[years.length - 1])];
console.log(ages);