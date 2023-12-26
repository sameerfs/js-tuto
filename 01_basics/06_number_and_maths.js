//Number
const score = 400
const balance = new Number(100)

// console.log(score)  // 400
// console.log(balance) // [Number: 100]

// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2)); // 100.00

const newNumber = new Number(2734.657876)

// console.log(newNumber.toPrecision(4)); // 2735
// console.log(newNumber.toPrecision(5)); // 2735.7
// console.log(newNumber.toPrecision(6)); // 2735.66

const numberOne = 1000000
// console.log(numberOne.toLocaleString()); //1,000,000
// console.log(numberOne.toLocaleString('en-IN')); // 10,00,000

// +++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++//
// console.log(Math);   // Object [Math] {} print in browser console is give details
// console.log(Math.PI); // 3.141592653589793

// console.log(Math.abs(-6)); // 6 remove - sign 
// console.log(Math.round(4.7)); // 5
// console.log(Math.round(4.3)); // 4
// console.log(Math.ceil(5.7)); //6
// console.log(Math.ceil(5.2)); //6

// console.log(Math.floor(5.2)); //5
// console.log(Math.floor(5.9)); //5

// console.log(Math.min(2,3,8,7,6,5)); //2
// console.log(Math.max(2,3,8,7,6,5)); //8

// console.log(Math.random()); // give output between 0 and 1
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 20
const max = 900

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

