let myDate = new Date()
// console.log(myDate); // 2023-12-26T13:07:28.128Z

// console.log(myDate.toString()); // Tue Dec 26 2023 13:07:28 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString()); //Tue Dec 26 2023

// console.log(myDate.toTimeString()); // 13:07:28 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toLocaleString()); // 12/26/2023, 1:07:28 PM

// console.log(myDate.toLocaleDateString()); // 12/26/2023

// console.log(myDate.toLocaleTimeString()); // 1:07:28 PM

// console.log(myDate.toISOString()) // 2023-12-26T13:12:29.546Z
// console.log(myDate.toJSON()) // 2023-12-26T13:12:29.546Z
// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023,0,21)
// let myCreatedDate = new Date("2023-01-21")
let myCreatedDate = new Date("01-21-2023")
// console.log(myCreatedDate.toLocaleString()); // 1/21/2023, 12:00:00 AM

let myTimeStamp = Date.now()
// console.log(myTimeStamp); //1703596736877
// console.log(myCreatedDate.getTime()); //1674259200000 
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

console.log(newDate.toLocaleDateString('default', {
    weekday: "long",
    day: "numeric",
    month: "2-digit",
    year: "numeric"
}))

//Tuesday, 12/26/2023


