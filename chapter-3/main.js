console.log('Welcome to chapter 3');

// for loops
for (let i = 0; i < 5; i++) {
    console.log(`The number is ${i}`);
}

console.log('Loop is finished');

// make all the names letter in the array capital
let friends = ['hari', 'pierre', 'samin', 'simon', 'cherry']

for (let i = 0; i < friends.length; i++) {
    friends[i] = friends[i].toUpperCase();
    console.log(friends[i]);
}

// make all the names only first letter in the array capital
for (let i = 0; i < friends.length; i++) {
    friends[i] = friends[i].charAt(0).toUpperCase() + friends[i].slice(1).toLowerCase();

    console.log(friends[i])
}

// while loop
x = 0;

while (x < 5) {
    console.log('Hello there' + ' ' + x);
    x++;
}


// if

let password = 'abscs';
console.log(password.length); //5

function lengthCheck(password) {
    password = String(password);

    if (password.length <= 5) {

        console.log('Please create a password more than 5 characters');
    }
    else if (password.length >= 12 && password.includes('@')) {
        console.log('You have created SUPER STRONG password');
    }
    else {
        console.log('You have succesfully created a password');
    }
}

lengthCheck('he'); // Please create a password more than 5 characters
lengthCheck('hello'); // Please create a password more than 5 characters
lengthCheck('merhabalar'); // You have succesfully created a password
lengthCheck(123456); // You have succesfully created a password
lengthCheck('1234567891011@'); // You have created SUPER STRONG password


// if not

let user = false;

if (!user) {
    console.log('hi');
}

// break continue 

const scores = [29, 0, 100, 12, 55, 42]

for (let i = 0; i < scores.length; i++) {

    if (scores[i] === 0) {
        continue; // it skips 0;
    }

    console.log(`your score: ${scores[i]}`);

    if (scores[i] === 100) {
        console.log('Congrats! You have got the top score!')
        break // this stops the loop after score is 100;
    }
}

// switch statament 
let grade = 'D';

switch (grade) {
    case 'A':
        console.log('You got an A!');
        break;
    case 'B':
        console.log('You got an B!');
        break;
    case 'C':
        console.log('You got an C!');
        break;
    case 'D':
        console.log('You got an D!');
        break;
    case 'E':
        console.log('You got an E!');
        break;
    case 'F':
        console.log('You got an F!');
        break;
    default:
        console.log('Not a valid grade');
        break;
}

// scobes

let studentName = 'Koray';
console.log(studentName); // Koray

if (true) {
    let studentName = 'Jari';
    console.log(studentName); // Jari
}

console.log(studentName); // Koray


