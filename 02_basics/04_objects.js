const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Waseem",
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// Nested Objects
const regularUser = {
    email: "jaweed",
    fullName: {
        firstName: "Jaweed",
        lastName: "Khan"
    }
}

// console.log(regularUser);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.firstName);

//Merage Objects
const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

// const obj3 = {obj1, obj2} // not prafered way
// const obj3 = Object.assign(obj1, obj2) // obj1 used as a target and obj1 value also changed
// const obj3 = Object.assign({}, obj1, obj2) //first paranthis {}, used as a target object

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

//array of objects
users = [
    {
        id: "1001",
        name: "Huma"
    },
    {
        id: "1002",
        name: "Shifa"
    },
    {
        id: "1003",
        name: "Ayesha"
    }
]

// console.log(users[2]);
// console.log(users[2]["name"]); //Ayesha
// console.log(users[2].name); //ayesha

//get objects keys
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

//check propery is present or not
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true
console.log(tinderUser.hasOwnProperty('isLogged')); //fasle

