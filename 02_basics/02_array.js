const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // push array inside the array as a element
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

const all_heros = marvel_heros.concat(dc_heros) // murge to array 

//spread operator also used to merage 2 or multiple arrays
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)

// 
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

//
console.log(Array.isArray("Taha")); // return false 
console.log(Array.from("Taha")); // convert to array [ 'T', 'a', 'h', 'a' ]
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Create array [ 100, 200, 300 ]
