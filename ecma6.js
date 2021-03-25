// ----------------------------LEVEL 1 | From ES5 to ES6--------------------------------

// EXERCISE 1 | Convert to Arrow functions

/* function multiply(num1, num2) {
   return num1 * num2;
}*/

const multiply = (num1, num2) => num1 * num2;

console.log(multiply(2,3));


/*function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}*/

const toCelsius = fahrenheit => {return (5/9) * (fahrenheit-32);}

console.log(toCelsius(25));


/* This function returns a string padded with leading zeros
 function padZeros(num, totalLen) {
    var numStr = num.toString();
    var numZeros = totalLen - numStr.length;
    for (var i = 1; i <= numZeros; i++) {
       numStr="0" + numStr; 
       } 
    return numStr;
} */

const padZeros = (num, totalLen) => {
    return num.toString().padStart(totalLen, 0);
 }
 
console.log(padZeros(3,5));


/*function power(base, exponent) { 
   var result=1; 
   for (var i=0; i < exponent; i++) { 
         result *=base; 
   } 
   return result;
} */


const power = (base, exponent) => {
    let result = 1;
    for (let i = 0; i < exponent; i++) { 
       result *= base; 
    }

   return result;
}
 
console.log(power(10,3));


/* function greet(who) {
    console.log("Hello " + who);
} */

const greet = (who = "person") => `Hello ${who}.`;

console.log(greet('Minerva'));


// EXERCISE 2 | Mend the error in this code:

/* users.map(function (user) {
   user.firstName;
});*/

let users = 
[{ firstName: 'Homer', lastName: 'Simpson' },
{ firstName: 'Marge', lastName: 'Simpson' },
{ firstName: 'Bart', lastName: 'Simpson' },
{ firstName: 'Lisa', lastName: 'Simpson' },
{ firstName: 'Maggie', lastName: 'Simpson' }];

const usersArray = users.map( (user) =>  {
   return user.firstName; 
});

console.log(usersArray);



// EXERCISE 3

/* Show the next Array as a complete string using .reduce()

var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

Result: 'a long time ago in a galaxy far far away'

*/

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const galaxy = epic.reduce((swString, word) => swString += word + ' ');

console.log(galaxy);


// EXERCISE 4

/* Create a function that receives a string and return it reversed using arrow functions,
spread operator and reverse() method */

const reversedStr = ([...str]) => str.reverse().join('');

console.log(reversedStr('Moon'));


// EXERCISE 5

/*Replace the next code block with async/await:*/


function b() {
    // ...
}
 
async function a() {
    // Ens esperem que la funció b acabi
    const result = await b();   
    doMoreWork(result);
 
}



 