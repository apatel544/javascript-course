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
/*
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
*/

/**
 * Truthy and Falsy 
 */

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('ankur'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;

if (money){
  console.log("Dont spend it all");
} else {
  console.log("You should get a job");
};

let height;

if(height) {
  console.log("height is defined");
} else {
  console.log("Height is UNDEFINED");  
}

console.log(typeof height);
*/

/**
 * Equality Operators == vs ===
 * 11/8/21
 */
/*
// === , Stricter, values must be an exact match and no type coercion, 18 === 18
const age = 18;
if(age === 18){
  console.log("You just became an adult!");
}

// == , less strict, DOES do type coercion, 18 == '18'
if(age == '18'){
  console.log("You just became an adult!");
}

const favorite = Number(prompt("Whats your favorite number?"));

console.log(favorite);
console.log(typeof favorite);

if (favorite === 24) {
  console.log("Nice number!"); 
} else if(favorite === 7){
  console.log("7 is also a cool number!");
} else if(favorite === 9){
  console.log("9 is also a cool number!");
} else {
  console.log("favorite number is neither 24, 7 or 9");
}

if (favorite !== 23) {
  console.log("why not 23?");
}
*/
/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive){
//   console.log("Serena is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (shouldDrive && hasGoodVision && !isTired){
  console.log("Serena is able to drive!");
} else {
  console.log("Someone else should drive...");
}
*/

/**********************************************************************
 * CODING CHALLENGE 3 
 */
/*
const dolphinAverageScore1 = (96 + 108 + 89) / 3;
const koalaAverageScore1 =  (88 + 91 + 110) / 3;

console.log(dolphinAverageScore1 , koalaAverageScore1);

if (dolphinAverageScore1 < koalaAverageScore1) {
  console.log("Hello koalas win with an average score of: " + koalaAverageScore1);
} else if(dolphinAverageScore1 > koalaAverageScore1){
  console.log("Hello dolphins win with an average score of: " + dolphinAverageScore1);
} else if(dolphinAverageScore1 === koalaAverageScore1){
  console.log("Both teams have won the trophy!");
} else {
  console.log("error");
}

// BONUS 1 
const dolphinAverageScore2 = (97 + 112 + 101) / 3;
const koalaAverageScore2 =  (109 + 95 + 123) / 3;
console.log(dolphinAverageScore2 , koalaAverageScore2);

if (dolphinAverageScore2 < koalaAverageScore2 && koalaAverageScore2 >= 100) {
  console.log("Hello koalas win with an average score of: " + koalaAverageScore2);
} else if(dolphinAverageScore2 > koalaAverageScore2 && dolphinAverageScore2 >= 100){
  console.log("Hello dolphins win with an average score of: " + dolphinAverageScore2);
} else if(dolphinAverageScore2 === koalaAverageScore2){
  console.log("Both teams have won the trophy!" && koalaAverageScore2 >= 100 && dolphinAverageScore2 >= 100);
} else {
  console.log("No one won a trophy");
}

// BONUS 2
const dolphinAverageScore3 = (97 + 112 + 101) / 3;
const koalaAverageScore3 =  (109 + 95 + 106) / 3;
console.log(dolphinAverageScore3 , koalaAverageScore3);

if (dolphinAverageScore3 < koalaAverageScore3) {
  console.log("Hello koalas win with an average score of: " + koalaAverageScore3);
} else if(dolphinAverageScore3 > koalaAverageScore3){
  console.log("Hello dolphins win with an average score of: " + dolphinAverageScore3);
} else if(dolphinAverageScore3 === koalaAverageScore3){
  console.log("Both teams have won the trophy!");
} else {
  console.log("error");
}

*/

/**
 * SWITCH STATEMENT
 */

const day = 'friday';

switch(day) {
  case 'monday':
    console.log('Start of the week');
    console.log('Wake up for work!');
    break;
  case 'tuesday':
    console.log('Team evaluation tonight!');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('go to the gym');
    break;
  case 'friday':
    console.log('FNH and TGIF!');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Get your class work completed!');
    break;
  default: 
    console.log('not a valid day...');
}

// Switch Converted into If-Else
if(day === 'monday'){
  console.log('Start of the week');
  console.log('Wake up for work!');
} else if (day === 'tuesday') {
  console.log('Team evaluation tonight!');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('go to the gym');
} else if (day === 'friday') {
  console.log('FNH and TGIF!');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Get your class work completed!');
} else {
  console.log('not a valid day...');
}




