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

/*
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
*/

/*
// METHODS with Arrays 

const friends = ['Ankur', 'Serena', 'Jax'];
console.log(friends);
// .push = adds element to end of the Array
const newLength = friends.push('Sagar');
console.log(friends);
console.log(newLength);

// .unshift = adds element to the start of an Array
friends.unshift('Reena');
console.log(friends);

// .pop = Removes the last element of the Array
friends.pop();
const popped = friends.pop();
console.log(friends);
console.log(popped);

// .shift = Removes the first element of the Array
friends.shift();
console.log(friends);

console.log(friends.indexOf('Serena')); // returns index of element
console.log(friends.indexOf('Sagar')); // returns -1 since not in the friends[] Array

// .includes uses Strict Equality, no Type coercion
// .includes = used for Conditionals 
console.log(friends.includes('Serena')); // returns T/F if element is in the array

if (friends.includes('Serena')) {
  console.log('You have a friend named Serena!');
}
*/

/*****************************************************
 * CODING CHALLENGE 2 - Fundamental JS Part 2
 */
 /*
function calcTips(bill) {
  // if (bill >= 50 && bill <= 300) {
  //   bill *= .15;
  // } else if (bill < 50 || bill > 300) {
  //   bill *= .20;
  // }
  return bill >= 50 && bill <= 300 ? bill * .15 : bill * .20 ;
}

console.log(calcTips(100));

const bills = [125, 555, 44];
const tips = [calcTips(bills[0]), calcTips(bills[1]), calcTips(bills[2])];
console.log(tips);

const total = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];
console.log(total);
*/

/*
// Objects

const ankurArray = [
  'Ankur',
  'Patel',
  2037 - 1996,
  'developer',
  ['Serena', 'Jax', 'Rocky']
];

//An Object contains Key/Value Pairs
//Keys are also known as Properties
// object literal syntax
// Arrays are used for more ordered Data, and Unstructured data uses an Object

const ankur = {
  firstName: 'Ankur',
  lastName: 'Patel',
  age: 2037 - 1996,
  job: 'developer',
  friends: ['Serena', 'Jax', 'Rocky']
};

//Shows the object in the console
console.log(ankur);

console.log(ankur.lastName); // Use the .firstName to acces the firstName property in the ankur object.

console.log(ankur['lastName']);

const nameKey = 'Name';

console.log(ankur['first' + nameKey]);
console.log(ankur['last' + nameKey]);
// console.log(ankur.'last' + nameKey);

const interestedIn = prompt('What do you want to know about Ankur? Choose between firstName, lastname, age, job, and friends');
// Dot notation
console.log(ankur.interestedIn); // get undefined when you try accessing a property that does not exist in the object being referenced

// Bracket notation
console.log(ankur[interestedIn]);

if (ankur[interestedIn]) {
  console.log(ankur[interestedIn]);
} else {
  console.log('Wrong request made. Choose between firstName, lastname, age, job, and friends');
}

ankur.location = 'Charlotte';
ankur['bestFriend'] = 'Serena';

console.log(ankur);

// Challenge
// "Ankur has 3 friends, and his best friend is Serena"

console.log(`${ ankur.firstName } has ${ ankur.friends.length } friends, and his best friend is ${ ankur.friends[0] }!`);

*/

/*
// OBJECT METHODS

const ankur = {
  firstName: 'Ankur',
  lastName: 'Patel',
  birthYear: 1996,
  job: 'developer',
  friends: ['Serena', 'Jax', 'Rocky'],
  hasDriversLicense: false,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // }
  
  // calcAge: function () {
  //   console.log(this); // 'this' references the object you are working with 
  //   console.log(ankur); 
  //   return 2037 - this.birthYear;
  // }

  calcAge: function (birthYear) {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getDriversLicense: function (hasDriversLicense) {
    return `${this.firstName} is a ${this.calcAge()} year old ${ankur.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
};

console.log(ankur.calcAge());

console.log(ankur.age);
console.log(ankur.age);
console.log(ankur.age);
console.log(ankur.age);
// console.log(ankur['calcAge'](1996));

// Challenge 2
// "Ankur is a 41 year old developer, and he has a driver's license"

console.log(ankur.getDriversLicense());
*/

/***********************************************
 * CODING CHALLENGE 3 - FUNDAMENTAL JS PART 2
 */
/*
const mark = {
  fullName: 'Mark Miller',
  mass: 78, // in kg
  height: 1.69, // in m

  calcBMI: function (){ // no need to pass params because we are pulling the values using the 'this.' value
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92, // in kg
  height: 1.95, // in m

  calcBMI: function (){
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
};
mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(`${ mark.fullName }'s BMI (${mark.bmi }) is higher than ${ john.fullName }'s BMI of (${john.bmi }).`);
} else if (john.bmi > mark.bmi) {
  console.log(`${ john.fullName }'s BMI (${ john.bmi }) is higher than ${ mark.fullName }'s BMI of (${ mark.bmi }).`);
}

*/

// LOOPS
/*
// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++){
  console.log(`Lifting weights repition ${rep}`);
}

const ankur = [
  'Ankur',
  'Patel',
  2037 - 1996,
  'developer',
  ['Serena', 'Jax', 'Rocky']
];

const types = [];

for (let i = 0; i < ankur.length; i++) {

  // reading from ankur array
  console.log(typeof ankur[i], ankur[i]);

  // filling types array
  // types[i] = typeof ankur[i];
  types.push(ankur[i]);

}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < ankur.length; i++) {
  if (typeof ankur[i] !== 'string') continue;
  console.log(typeof ankur[i], ankur[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < ankur.length; i++) {
  if (typeof ankur[i] !== 'string') break;
  console.log(typeof ankur[i], ankur[i]);
}

const ankur = [
  'Ankur',
  'Patel',
  2037 - 1996,
  'developer',
  ['Serena', 'Jax', 'Rocky']
];

for (let i = ankur.length - 1; i >= 0; i--){
  console.log(ankur[i]);
}

for (let exercise = 1; exercise < 4; exercise++){
  console.log(`__________STARTING EXERCISE ${ exercise }`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weights repetition ${ rep }`);
  }
}

 // While Loops
for (let rep = 1; rep <= 10; rep++){
  console.log(`Lifting weights repition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repition ${ rep }`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

*/

/*******************************************************
 * CODING CHALLENGE 4 - FUND JS PART 2
 */


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

function calcTips(bills) {
  return bills >= 50 && bills <= 300 ? bills * .15 : bills * .20;
}

for (let i = 0; i < bills.length; i++) {
  
  tips.push(calcTips(bills[i]));
  total.push(bills[i] + tips[i]);

  console.log(`The bill was $${ bills[i] } which means the tip is ${tips[i]} dollars and so the total is ${total[i]}, pay up! `);
}

// BONUS CHALLENGE
function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum/arr.length;
}
  
console.log(calcAverage(total));