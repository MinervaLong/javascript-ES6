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