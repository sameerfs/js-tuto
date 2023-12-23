// let score = 33
// let score = "33"
// let score = "33aa"
// let score = true
let score

// console.log(score);
// console.log(typeof score);
// console.log(typeof(score));

//Number Conversion
let valueInNumber = Number(score)

// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// Number Conversion output example
// "33" => 33
// 33 => 33
// "33aa" => NaN
// true => 1, false => 0
// undefined => NaN

// boolean Conversion
let isLoggedIn;
let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(isLoggedIn)
// console.log(typeof booleanIsLoggedIn)
// console.log(booleanIsLoggedIn)

// 1 => true 0 => fasle
// "22" => true
// "" => false
// true => true, false => fasle
// undefined => false

//string conversion
let cityName
let stringConver = String(cityName)

// console.log(cityName);
// console.log(typeof stringConver);
// console.log(stringConver);

// "" => 
// "33abc" => 33abc
// true => true,  false => false
// undefiend => undefend

/****************************Operations*************************************/
let value = 3
let negValue = -value
// console.log(negValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let string1 = "ASWK"
let string2 = " Taha Bhai"

let string3 = string1 + string2
// console.log(string3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
let gameCounter2 = ++gameCounter;

console.table([gameCounter, gameCounter2])

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

//prefixed and post fixed operator read on mdn
// If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.
let X = 100
let Y = X++;
console.table([X, Y])

// If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
let X2 = 100
let Y2 = ++X2;
console.table([X2, Y2])