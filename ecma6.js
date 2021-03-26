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


// EXERCISE 6

/*We want an Array only with tasks names
- Use .forEach() to obtain this array.
- Use .map() to obtain this array. */

var tasks = [
    {
       'name' : 'Start React web',
       'duration' : 120
    },
    {
       'name' : 'Work out',
       'duration' : 60
    },
    {
       'name' : 'Procrastinate on facebook',
       'duration' : 240
    }
];
    
// WITH MAP
    
const mapArray = tasks.map( (task) =>  {
    return task.name; 
});
    
console.log(mapArray);

// WITH FORAECH

const forEachArray = [];

tasks.forEach(function(task) {
   forEachArray.push(task.name);
});

console.log(forEachArray);


// ----------------------------LEVEL 2---------------------------------

// EXERCISE 7 

const multTable = () => {
   let number1;
   let number2;
   let i;

   do {
      number1 = parseInt(prompt('Número 1: '));
   }while(number1 < 1 || number1 > 10)

   do {
      number2 = parseInt(prompt('Número 2: '));
   } while(number2 < 1 || number2 > 10)   
   
   for(i = 1; i <= number2; i++){
      console.log(number1 + " x " + i + " = " +  i * number1);
   }
}

console.log(multTable());


// EXERCISE 8


// Store elements in variables

const form = document.getElementById('form');

let firstNumber = document.getElementById('firstNumber');
let secondNumber = document.getElementById('secondNumber');

let num1Error = document.getElementById("num1Error");
let num2Error = document.getElementById("num2Error");


// Functions

const multTable2 = () => {
   let number1 = parseInt(document.getElementById('firstNumber').value);
   let number2 = parseInt(document.getElementById('secondNumber').value);
   let table = document.getElementById('printTable');
   let i;
   let j = 0;

   while (table.hasChildNodes()) {
      table.removeChild(table.firstChild);
   }
   
   if (validate()) {
      for(i = 1; i <= number2; i++){
         let tr = document.createElement('tr');
         tr.className = 'tableRows';
         let td1 = document.createElement('td');
         td1.innerHTML = number1;
         let td2 = document.createElement('td');
         td2.innerHTML = 'x';
         let td3 = document.createElement('td');
         td3.innerHTML = i;
         let td4 = document.createElement('td');
         td4.innerHTML = '=';
         let td5 = document.createElement('td');
         td5.innerHTML = number1 * i;
         tr.append(td1,td2,td3,td4,td5);
         table.append(tr);
      }
   }  

}


// Next function is a validation once we click in submit button
const validate = () => {
   let validation = true; // At first we assume that the data is valid

   // Validate the fields are not empty and are between 1-10
   if (firstNumber.value == ""){
      firstNumber.style.border = "3px solid red";
      num1Error.textContent = "This field cannot be empty";
      firstNumber.focus();
      validation = false;
   }else if (firstNumber.value < 1 || firstNumber.value > 10) {
      firstNumber.style.border = "3px solid red";
      //num1Error.textContent = "Numbers between 1 and 10";
      firstNumber.focus();
      validation = false;
   } else {
      firstNumber.style.border = "1px solid green";
      num1Error.textContent = "Looks good!";
   }
   
   // The same with secondNumber
   if (secondNumber.value == ""){
      secondNumber.style.border = "3px solid red";
      num2Error.textContent = "This field cannot be empty";
      secondNumber.focus();
      validation = false;
   } else if (secondNumber.value < 1 || secondNumber.value > 10) {
      secondNumber.style.border = "3px solid red";
      //num2Error.textContent = "Numbers between 1 and 10";
      secondNumber.focus();
      validation = false;
   } else {
      secondNumber.style.border = "1px solid green";
      num2Error.textContent = "Looks good!";
   }   

   return validation;
}

// Next functions are validation before we click submit button
const number1Verify = () => {
   if (firstNumber.value == ""){
      firstNumber.style.border = "3px solid red";
      num1Error.textContent = "This field cannot be empty";
      firstNumber.focus();
   }else if (firstNumber.value < 1 || firstNumber.value > 10) {
      firstNumber.style.border = "3px solid red";
      num1Error.textContent = "Numbers between 1 and 10";
      firstNumber.focus();
   } else {
      firstNumber.style.border = "1px solid green";
      num1Error.textContent = "Looks good!";
   }
}

const number2Verify = () => {
   if (secondNumber.value == ""){
      secondNumber.style.border = "3px solid red";
      num2Error.textContent = "This field cannot be empty";
      secondNumber.focus();
   } else if (secondNumber.value < 1 || secondNumber.value > 10) {
      secondNumber.style.border = "3px solid red";
      num2Error.textContent = "Numbers between 1 and 10";
      secondNumber.focus();
   } else {
      secondNumber.style.border = "1px solid green";
      num2Error.textContent = "Looks good!";
   }   

}

// Event Listeners

form.addEventListener('submit', multTable2);

// To verify the data before clicking submit
firstNumber.addEventListener('change', number1Verify);
secondNumber.addEventListener('change', number2Verify);

// To prevent the form to refresh if it works correctly
document.getElementById('form').addEventListener('submit', function(e) {
   e.preventDefault();
});
 