/*
let js = 'exciting';
console.log(40 + 30);

console.log('yang');
console.log(22);

// variable name
let firstName = 'li';
console.log(firstName);

let PI = 3.14;
*/

/*
let jsIsFun = true;
console.log(jsIsFun);
console.log(typeof true);
console.log(typeof jsIsFun);
console.log(typeof 22);
console.log(typeof 'sss');

jsIsFun = "yes";
console.log(typeof jsIsFun);

let year;
console.log(typeof year);   // undefined

year = 2024;
console.log(year, typeof year);

console.log(typeof null);   // object
*/

/*
let age = 20;
age = 21;

const birthYear = 2000;   // const 声明的变量不可修改
// const 声明变量时必须有初始值

const now = 2039;
const ageJonas = now - birthYear;
console.log(ageJonas);
console.log(4 * 2, 30 / 10, 2 ** 3)

const firstName = 'yang';
const lastName = 'wy';
console.log(firstName + lastName);
console.log(firstName + ' ' + lastName);
*/

///////////////////////////////////////
// Coding Challenge #1
/*
let markWeights = 78;
let markHeight = 1.69;
let johnWeights = 92;
let johnHeight = 1.95;

let markBmi = markWeights / markHeight ** 2;
let johnBmi = johnWeights / johnHeight ** 2;
let markHigherBMI = markBmi > johnBmi;
if (markHigherBMI === true) {
  console.log("Mark has a higher BMI than John");
} else {
  console.log("Mark has a lower BMI than John");
}

// test data 2
markWeights = 95;
markHeight = 1.88;
johnWeights = 85;
johnHeight = 1.76;

markBmi = markWeights / markHeight ** 2;
johnBmi = johnWeights / johnHeight ** 2;
markHigherBMI = markBmi > johnBmi;
if (markHigherBMI === true) {
  console.log("Mark has a higher BMI than John");
} else {
  console.log("Mark has a lower BMI than John");
}

// teacher version
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;
markHigherBMI = BMIMark > BMIJohn;
console.log(BMIJohn, BMIMark, markHigherBMI);
*/

/*
const firstName = 'yang';
const job = 'intern';
const birthYear = 2000;
const year = 2038;

const yang = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(yang);

// use `` to write template literals
const yangNew = `I'm ${firstName}, a ${year - birthYear} years old ${job} !`;
console.log(yang);

console.log('first line string \n\
second line \n\
third line');

console.log(`1 line
2 line
3 line`);
*/

/*
const age = 12;
if (age >= 18) {
  console.log('You can start driving license 🚗');
} else {
  console.log(`You are too young. Wait another ${18 - age} years.`);
}

const birthYear = 1991;
if (birthYear <= 2000) {
  let century = 20;
} else {
  let century = 21
}
console.log(century);
*/

