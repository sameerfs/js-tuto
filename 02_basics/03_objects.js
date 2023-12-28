// Singleton
// Object.create()

// object literals

// Ho to declare symbol and used as keys in objects
const mySym = Symbol("keys")
// console.log(typeof mySym);

//create a object 
const jsUser = {
    name: "Taha",
    "full name": "Mohammad Taha",
    [mySym] : "myKey1",
    age: "5",
    class: "First",
    location: "Aurangabad",
    email: "taha@gmail.com"
}

//how to access object values
// console.log(jsUser.name);  // Taha
// console.log(jsUser["name"]); // Taha
// console.log(jsUser["full name"]); // Mohammad Taha

// console.log(jsUser.name);
// console.log(jsUser[mySym]);

// How to change keys values in object
jsUser.email = "TahaKhan@yahoo.com"
// console.log(jsUser);

//how to freeze object (changes not done)
// Object.freeze(jsUser)
jsUser.email = "MohammadTaha@radiffmail.com"
// console.log(jsUser);

// how to add functions
jsUser.greeting = function () {
    console.log("Hello JsUser");
}

jsUser.greeting2 = function () {
    console.log(`Hello Js User ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());
