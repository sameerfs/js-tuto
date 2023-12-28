//functions


//how to create functions (or function defination)
function  sayMyFunName() {
    console.log("T");
    console.log("A");
    console.log("H");
    console.log("T");
}

// sayMyFunName // function refrence
// sayMyFunName() // function execution after adding parantesis

// function addTwoNumbers(number1, number2) { // parameters
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) { // parameters
    let result = number1 + number2
    return result // if write any code after return not execute
}

addTwoNumbers(3, 4) // 7 arguments
addTwoNumbers(3, "4") // 34
addTwoNumbers(3, "a") // 3a
addTwoNumbers("3", 5) // 35

const result = addTwoNumbers(3, 4)
// console.log("Result: ", result); // Result: undefind

function loginUserMessage(username = "sam"){
    if (!username) {
        console.log("Please enter user name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("TAHA"));  //TAHA just logged in
// console.log(loginUserMessage()); 



////////////////////////////////////////////////////////////
function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500)); //[ 200, 400, 500 ]

//how to pass object in function 
const user = {
    username: "Taha",
    price: 199
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: "399"
})

//how to pass Array in function 

myNewArr = [200, 400, 500]

function returnSecondValue(getArr) {
    return getArr[0]
}

// console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([100, 200, 400]));




