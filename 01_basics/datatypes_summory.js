//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id);
// console.log(anotherId);
// console.log(id === anotherId); // fasle

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

let cars = ["sidan", "SUV", "Hashbag"]
let myObj = {
    name: "MOHD TAHA",
    class: "First",
    rollNo: 23
}
let myFunc = function () {
    console.log("Hellow World");
}

// console.log(typeof cars); //objects
// console.log(typeof myObj); //objects
// console.log(typeof myFunc); //objects

//how to print Reference datatypes
console.log(cars);
console.log(myObj);
console.log(myFunc());

// https://262.ecma-international.org/5.1/#sec-11.4.3