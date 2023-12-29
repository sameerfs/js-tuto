const user = {
    username: "Taha",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to Aurangabad`);
    }
}

// user.welcomeMessage()
// user.username = "Nabu"
// user.welcomeMessage()

// console.log(this); // if this line run in node (engion) its give empty object
// but when run browser console its give objects or many

// function chai() {
//     let username = "Taha"
//     console.log(this.username);
// }
// Output undefine bcz this not work in function

// chai()

//Arrow Functions

const chai = () => {
    let username = "Taha"
    console.log(this)
}

// chai()

() => {} // basic declaration of arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implicit return
//a way of returning a value from a function without explicitly using the return keyword. 
// if used cerlibrases used return keyword but used parantesis not used return
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "Taha"}) // returning object

console.log(addTwo(4, 5));