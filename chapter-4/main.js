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
