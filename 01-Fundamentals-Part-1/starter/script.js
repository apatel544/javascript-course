/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Ankur");
console.log(23);

let firstName = "Bob ";
console.log(firstName);

let myFirstJob = "Coder";
let myCurrentJob = "teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myCurrentJob);
console.log(myFirstJob);

/*
Practice Assignment For JS Fundamentals - Part 1

LECTURE: Values and Variables
1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
2. Log their values to the console
*/
/*
let country = "United States of America";
let continent = "North America";
let population = 329.5 + " (Population in Millions)";

console.log(country);
console.log(continent);
console.log(population);
*/

/*
true;
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log("Ankur");
console.log(23);

javascriptIsFun = "YES!";
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

/**
 * LECTURE: Data Types
1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console
 */
/*
let isIsland = false;
let language;
let country = "United States of America";
let continent = "North America";
let population = 329.5 + " (Population in Millions)";
console.log(isIsland);
console.log(language);
console.log(country);
console.log(population);

let age = 30;
age = 31;

const birthYear = 1991;

// const job;

var job = "programmer";
job = "entreprenuer";
*/
/*
const now = 2037;

const ageAnkur = now - 1996;
const ageSerena = now - 1997;
console.log(ageAnkur,ageSerena);

console.log(ageAnkur * 2, ageAnkur / 10, 2**3);
// 2 ** 4 means 2 to the power of 3 

const firstName = 'Ankur';
const lastName = 'Patel';
console.log(firstName + ' ' + lastName);

let x = 10 + 5; // 15 
x+=10 // x = x + 10
console.log(x);

console.log(ageAnkur > ageSerena);
console.log(ageSerena >= 18);
*/


/*********************************************
 * Coding Challenge 1
 */
/*
const markWeight1 = 78;
const johnWeight1 = 92;

const markHeight1 = 1.69;
const johnHeight1 = 1.95;

const markWeight2 = 95;
const johnWeight2 = 85;

const markHeight2 = 1.88;
const johnHeight2 = 1.76;

const markBMI1 = markWeight1 / markHeight1 ** 2;
const johnBMI1 = johnWeight1 / (johnHeight1 * johnHeight1);

const markBMI2 = markWeight2 / (markHeight2 * markHeight2);
const johnBMI2 = johnWeight2 / johnHeight2 ** 2;

const markHigherBMI1 = markBMI1 > johnBMI1;
const markHigherBMI2 = markBMI2 > johnBMI2;


console.log("markBMI1 " + markBMI1 + " johnBMI1 " + johnBMI1 + " " + markHigherBMI1);

console.log("markBMI2 " + markBMI2 + " johnBMI2 " + johnBMI2 + " " + markHigherBMI2);
*****************************************/

// Strings and Template Literals
/*
const firstName = 'Ankur';
const job = 'programmer';
const birthYear = 1996;
const year = 2037;

const ankur = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";

console.log(ankur);

const ankurLiteral = `I'm ${firstName}`;

console.log(ankurLiteral);
*/
/*
// IF-Else Statements
const age = 12;


if (age >= 18){
  console.log('Serena can starting driving 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Serena has ${yearsLeft} before she can drive.`);
}

const birthYear = 1998;
let century;
if(birthYear < 2000) {
  century = 20;
} else{
  century = 21;
}

console.log(century); 
*/

/*********************************************
 * Coding Challenge 2
 */
/*
const markWeight1 = 10;
const johnWeight1 = 92;

const markHeight1 = 1.69;
const johnHeight1 = 1.95;

const markWeight2 = 95;
const johnWeight2 = 85;

const markHeight2 = 1.88;
const johnHeight2 = 1.76;

const markBMI1 = markWeight1 / markHeight1 ** 2;
const johnBMI1 = johnWeight1 / (johnHeight1 * johnHeight1);

const markBMI2 = markWeight2 / (markHeight2 * markHeight2);
const johnBMI2 = johnWeight2 / johnHeight2 ** 2;

const markHigherBMI1 = markBMI1 > johnBMI1;  
const markHigherBMI2 = markBMI2 > johnBMI2;

if (markBMI1 > johnBMI1){
  console.log(`Mark's BMI (${markBMI1}) is greater than John's BMI (${johnBMI1})`);
}else {
  console.log(`Johns's BMI (${johnBMI1}) is greater than Marks's BMI (${markBMI1})`);
}

*****************************************/

/**
 * Type Conversion and Coercion
 */

//Type Conversion

const inputYear = '1996';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 10);

console.log(Number('Ankur'));
console.log(typeof NaN);

console.log(String(23), 23);

//Type Coercion

console.log('I am ' + 23 + " years old");
console.log('23' - '10' - 3);
console.log('23' / 2);
console.log('23' > '18');

let n = '1' + 1;
n = n - 1;
console.log(n);


