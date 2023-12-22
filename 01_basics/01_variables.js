const accountId = 1278
let accountEmail = "Taha@gmail.com"
var accountPassword = 12345
accountCity = "Nagpur" // not used this way defined let or const 
let accountState;  //variable declared but undefined 

//accountId = 2879 //Not allowed (Assignment to constant variable.)
accountEmail = "hr@gmail.com"
accountPassword = 123123
accountCity = "Akola"

//console.log(accountId);
console.table([accountId, accountEmail, accountPassword,accountCity, accountState])