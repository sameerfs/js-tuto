/* String can be created as primatives, from string literals
or as object, using the String() constructor */

// Examples
const string1 = "A string primative" // in double quotes
const string2 = 'also a string primative' // in single quotes
const string3 = `Yet another string primative` // in backtick

const name = "Mohammad Taha "
const repoCount = 55

// console.log(name + repoCount + " Values")

//above syntax in old type syntax so used bellow syntax 
//used backtick to specified string
// console.log(`My name is ${name} and my total repo count ${repoCount}`)

// String()
//The String() constructor creates String objects. When called as a function, it returns primitive values of type String.
const gameName = new String("Mario")

// console.log(gameName)  // [String: 'Mario']
// console.log(gameName.length)  // 5
// console.log(gameName.toUpperCase()) //MARIO
// console.log(gameName.charAt(3))  //i
// console.log(gameName.indexOf('r')) //2

const newString = gameName.substring(0, 3) 
// console.log(newString) //Mari
// console.log(gameName.substring(2)) //rio

const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str.slice(-4));
// Expected output: "dog."

console.log(str.slice(-9, -5));
// Expected output: "lazy"

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

let gameName3 = "Mario-game-name"
console.log(gameName3.split('-'));
