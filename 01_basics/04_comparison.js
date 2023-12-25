//Comparison

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

//avoid this type of conversion  bcz confusion in comparison
// console.log(null > 0); //false
// console.log(null < 0); //fasle
// console.log(null >= 0); //true
// console.log(null <= 0); //true
// console.log(null == 0); //fasle
// console.log(null != 0); //true

//avoid this type of conversion  bcz confusion in comparison
// console.log(undefined > 0);
// console.log(undefined < 0);
// console.log(undefined >= 0);
// console.log(undefined >= 0);
// console.log(undefined == 0);
// console.log(undefined != 0);

// ===
console.log("2" == 2); //true bcz first its convert first "2" to string and convert
console.log("2" === 2); //fasle but in this === its called strict check mins its also check datatype