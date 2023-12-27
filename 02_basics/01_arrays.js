//arrays

const myArr = [2,4,6,8,10,12,14]
const superHero = ["Shaktiman", "RaOne", "Krish"]

const myArr2 = new Array(3,6,9,12,15,18)

// console.log(myArr2)

//Array methods
// myArr.push(21) // add value at the end point of the array
// myArr.pop() // remove last value from array 

// myArr.unshift(123) //add value at the start point of the array but not used mostly (not optimized)
// myArr.shift() // remove first value of array
// console.log(myArr.includes(10)); // return true check 10 value is avaible in array
// console.log(myArr.indexOf(10)); // return index of value

const newArr = myArr.join() // join convert array to string 
// console.log(newArr);

//Slice, Splice
console.log("A ",myArr);

const myn1 = myArr.slice(1,4) //its give u the range of value but not manupulate array
console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,4) // its give u range of value and also manupulate the orignal array
console.log(myn2);
console.log("C ",myArr);
