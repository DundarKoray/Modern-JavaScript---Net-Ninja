// alert('Hello world!');
console.log('Hello world!');

let age = 32;
console.log(age); //32
age = 33;
console.log(age); //33


let year = 2022;
console.log(year); // 2022

console.log(age, year); // 33 2022

const points = 100;
console.log(points); // 100

// points = 90; this would give error, you cannot resign const

// single line comment

/*
    Multiple line
    comment
*/


//Strings
let email = "hulkthegreat@outlook.com";
console.log(email); // hulkthegreat@outlook.com

// string concatenation
let firstName = "Brandon";
let lastName = "Sanderson";
let fullName = firstName + ' ' + lastName;

console.log(fullName); // Brandon Sanderson

// getting charecters
console.log(firstName[0]); // B

// string length
console.log(firstName.length); // 7

// string methods
console.log(fullName.toUpperCase()); // BRANDON SANDERSON
let result1 = fullName.toLowerCase();
console.log(result1); // brandon sanderson

let index = email.indexOf('@');
console.log(index); // 12

//  COMMON STRING METHODS
let yourEmail = "johnsmith@email.com";

// lastindexOf()
// let result = yourEmail.lastIndexOf("h");
// console.log(result); // 8

// slice()
// let result = yourEmail.slice(0, 4);
// console.log(result); //john

// substr()
// let result = yourEmail.substr(4, 5);
// console.log(result); // smith

// replace()
// let result = yourEmail.replace("j", "k");
// console.log(result); // kohnsmith@email.com
// let result = yourEmail.replace("john", "eric");
// console.log(result); // ericsmith@email.com
