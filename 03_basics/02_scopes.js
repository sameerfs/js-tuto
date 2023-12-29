//Scopes
// var variable have a probleam in scope

let a = 10
const b = 20
var c = 30

{} // curly braces scope

if (true) {
    let a = 55
    const b = 66
    c = 33
    // console.log("Inside: ", a)
    // console.log("Inside: ", b)
}
// console.log(a);
// console.log(b);
// console.log(c);

// DOM Document object model
//kasia html kay page ko manupilate kiya jata hai javascript kay throw caleed DOM

//nested Scopes (child function execcess paranet function)
function one(params) {
    const username = "Taha"

    function two(params) {
        const website = "itux"
        console.log(username);
    }
    // console.log(website);
    two()
}

// one()

if (true) {
   const username = "Taha Khan" 
   if (username === "Taha Khan") {
        const website = " youtube"
        // console.log(username + website);
   }
//    console.log(website);
}
// console.log(username);

//++++++++++++++++++++++++++ Intersting +++++++++++++++++++++++++++++//

addone(5) // this function call not give any error
function addone(num) {
    return num + 1
}

addtwo(7)  // Cannot access 'addtwo' before initialization bcz we declare function with constant variable
const addtwo = function (num) {
    return num + 2
}
