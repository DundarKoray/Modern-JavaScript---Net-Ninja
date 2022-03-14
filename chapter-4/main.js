// function declaration
function greet() {
    console.log('Greeting! How may I help you?');
}

greet(); //Greeting! How may I help you?

// function expression
const speak = function () {
    console.log('Hey there! How is it going?')
}; // note: when it is function expression you put ;

speak(); // Hey there! How is it going?



// hoisting function decöaration vs function expression

goodBye(); // Take care my friend!

function goodBye() {
    console.log('Take care my friend!');
}


// coolGoodBye(); this would not work

const coolGoodBye = function () {
    console.log('Astala Vista Baby');
};


// ARGUMENT AND PARAMETERS
const introduce = function (name = 'Antti', job = 'jobless') {
    console.log(`Hello, I am ${name} and I am a ${job}.`);
};

introduce('Koray Dündar', 'front-end developer');
// Hello, I am Koray Dündar and I am a front - end developer.
introduce();
// Hello, I am Antti and I am a jobless.



// ARROW FUNCTIONS 

// convert regular functions to arrow functions

// let greetings = function () {
//     return "Hello world!";
// }


let greetings = () => "Hello world!";
console.log(greetings());

// const bill = function (productsFee, tax) {
//     let total = 0;
//     for (let i = 0; i < productsFee.length; i++) {
//         total += productsFee[i] + productsFee[i] * tax;
//     }
//     return total;
// }

// console.log(bill([100, 200, 300, 400], 0.25));

const bill = (productsFee, tax) => {
    let total = 0;
    for (let i = 0; i < productsFee.length; i++) {
        total += productsFee[i] + productsFee[i] * tax;
    }
    return total;
}

console.log(bill([100, 200, 300, 400], 0.25));



// methods and call backs

let students = ['John', 'David', 'Ryan', 'Bob', 'Simon'];

let studentGreet = (person, index) => {
    console.log(index + ': Hello my name is ' + person + '.')
}

students.forEach(studentGreet);



const ul = document.querySelector('.students');
let html = '';

students.forEach(student => {
    html += `<li style="color:purple">${student}</li>`
});

ul.innerHTML = html;
