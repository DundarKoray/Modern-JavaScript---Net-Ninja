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







