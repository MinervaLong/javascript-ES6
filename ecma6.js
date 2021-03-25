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

