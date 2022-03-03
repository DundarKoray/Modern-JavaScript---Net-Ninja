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


// NUMBERS
let radius = 10;
const pi = 3.14;

console.log(radius, pi); // 10, 3.14
console.log(radius / 2); // 5

// math calculations: +, -, /, *, **, %

// let result = pi * radius ** 2;
// console.log(result); // 314

// order operations BIDMAS B(brackets) I(**) D(devide) M(multiply) A(+) S(-)
// let result = 5 * (10 - 3) ** 2;
// console.log(result); //245


let likes = 10;
// let result = likes + 1;
// console.log(result); // 11

likes++;
console.log(likes); // 11
likes--;
console.log(likes); // 10
likes += 10; // same as this likes = 10 + 10;
console.log(likes); // 20
likes -= 5;
console.log(likes); // 15
likes *= 2;
console.log(likes); // 30

let blog = 'This blog has ' + likes + ' likes.';
console.log(blog); // This blog has 30 likes.


// TEMPLATE STRINGS

// concetenation way
let productName = 'OnePlus 9';
let message_1 = 'You have won ' + productName + ' mobile phone!';
console.log(message_1); // You have won OnePlus 9 mobile phone!

// template string (literal) way  (back ticks ``)
let message_2 = `You have won ${productName} mobile phone!`;
console.log(message_2); // You have won OnePlus 9 mobile phone!

// creating html templates
let author = 'Mark'
let book = 'Once upon a time'

let html = `
    <h2>${book}</h2>
    <p>Written by ${author}</p>
    <span>This blog has ${likes} likes.</span>
`

console.log(html);


// ARRAYS
let ninjas = ['Koray', 'Hari', 'Simon', 'Cherry'];
console.log(ninjas);
console.log(ninjas[0]);

let randoms = ['Mark', 23, 22, 'Alex'];
console.log(randoms);
randoms[3] = "Georghe";
console.log(randoms);

// array props and methods
console.log(randoms.length); // 4
console.log(ninjas.join(',')); // Koray,Hari,Simon,Cherry
console.log(ninjas.indexOf('Cherry')); // 3

let newNinjas = ninjas.concat(['Anna', 'Emma']);
console.log(newNinjas);
newNinjas.push('Kubilay');
newNinjas.push('Tommy');
console.log(newNinjas);
newNinjas.pop();
console.log(newNinjas);


// NULL AND UNDEFINED
let ages;
console.log(ages, ages + 3, `his new age is ${ages}`); // undefined NaN 'his new age is undefined
ages = null;
console.log(ages, ages + 3, `his new age is ${ages}`); // null 3 'his new age is null'


// BOOLEAN false true
let squads = ['Shaq', 'Harry', 'Fox', 'Bryant', 'Fisher'];
console.log(squads.includes('Shaq')); //true
console.log(squads.includes('Jordan')); //false

function testingBoolean(array, name) {
    if (array.includes(`${name}`)) {
        console.log(`${name} is here`);
    }
    else {
        console.log(`${name} is not here`);
    }
};

testingBoolean(squads, 'Shaq'); // Shaq is here
testingBoolean(squads, 'Jordan'); // Jordan is not here

let shaqJerseyNumber = 34;
console.log(shaqJerseyNumber == 34); // true
console.log(shaqJerseyNumber == 12); // false
console.log(shaqJerseyNumber != 12); // true
console.log(shaqJerseyNumber > 30); // true
console.log(shaqJerseyNumber > 40); // false
console.log(shaqJerseyNumber >= 34); // true

