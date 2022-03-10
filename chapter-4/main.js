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