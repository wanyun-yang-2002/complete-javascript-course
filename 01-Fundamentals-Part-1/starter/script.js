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

//////////////////////////
// Coding Challenge #2
// 在第一个里面已经实现这一块的功能了
/*
const markWeights = 78;
const markHeight = 1.69;
const johnWeights = 92;
const johnHeight = 1.95;

const markBmi = markWeights / markHeight ** 2;
const johnBmi = johnWeights / johnHeight ** 2;
if (markBmi > johnBmi) {
  console.log(`Mark's BMI (${markBmi}) is higher BMI than John's (${johnBmi})!`);
} else {
  console.log(`John's BMI (${markBmi}) is higher BMI than Mark's (${johnBmi})!`);
}
*/

// type conversion
/*
const inputYear = '1990';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('yang'));
console.log(typeof NaN);

console.log(String(34), 34);

// type coercion
console.log('I am ' + 21 + ' years old');
console.log('23' - '10' - 2);   // 11
console.log('23' + '10' + 2);   // 23102
console.log('23' * '2');    // 46
console.log('23' / '2');    // 11.5
console.log(2 + 3 + 4 + '5');   // 95
console.log('10' - '5' - 1 + '2');  // 42
*/

/*
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean());

const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("you should find a job");
}

let height;
if (height) {
  console.log('ok');
} else {
  console.log('not ok');
}

const hasDriverLicense = true;
const hasGoodVersion = true;

console.log(hasDriverLicense && hasGoodVersion);
console.log(hasDriverLicense || hasGoodVersion);
console.log(!hasGoodVersion);

if (hasDriverLicense && hasGoodVersion) {
  console.log('she is able to drive');
} else {
  console.log('someone else should drive');
}

const isTired = false;
console.log(hasDriverLicense && hasGoodVersion && isTired);

if (hasDriverLicense && hasGoodVersion && !isTired) {
  console.log('she is able to drive');
} else {
  console.log('someone else should drive');
}
*/

/*
////////////////////////////////////
// Coding Challenge #3
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);
if (scoreDolphins > scoreKoalas) {
  console.log('Dolphins win');
} else if (scoreDolphins == scoreKoalas) {
  console.log('same score');
} else if (scoreDolphins < scoreKoalas) {
  console.log('Koalas win');
}

// bonus 1
if (scoreDolphins > scoreKoalas && scoreKoalas >= 100) {
  console.log('Dolphins win');
} else if (scoreDolphins === scoreKoalas) {
  console.log('same score');
} else if (scoreDolphins < scoreKoalas && scoreKoalas) {
  console.log('Koalas win');
}
*/

/*
const day = 'monday';

switch (day) {
  case 'monday':
    console.log('plan course structure');
    console.log('go to meetup');
    break;
  case 'tuesday':
    console.log('this tuesday');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('this is 3 or 4');
    break;
  default:
    console.log('not a valid day');
}

const age = 23;
age >= 18 ? console.log("older than 18") : console.log('younger than 18');

const drink = age >= 18 ? 'old' : 'young';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'old';
} else {
  drink2 = 'young';
}
console.log(drink2);

console.log(`i like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/

//////////////////////////////
// Coding challenge #4
/*
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`the bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/
