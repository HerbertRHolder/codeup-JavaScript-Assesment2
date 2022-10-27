"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

function isANumber(a){
    return typeof a === "number";
}


function isNumeric(a){
    return !isNaN(parseFloat(a));
}
function isString(a){
    return typeof a === "string";
}

// function isANumber(a){
//    return !isNaN(parseFloat(a)) && 
// }





function increment(x){
    if (isNumeric(parseFloat(x))){
        return parseFloat(`${++x}`);
    }
    return false;
}
function decrement(x){
    x = parseFloat(x);
    if (isNumeric(x)){
        return parseFloat(`${--x}`);
    }
    return false;
}



function getHighestNumber(a, b, c){
    if (isNumeric(a) && isNumeric(b) && isNumeric(c)){
        return Math.max(a, b, c);
    }
    return false;
}


function parseNumber(a){
    return parseFloat(a);
}

function add(a,b){
    a = parseFloat(a);
    b = parseFloat(b);
    if (isNumeric(a)&& isNumeric(b)){
        return parseFloat(a+b);
    }
    return false;
}


function multiply(a, b){
    a = parseFloat(a);
    b = parseFloat(b);
    if (isNumeric(a)&& isNumeric(b)){
        return parseFloat(a*b);
    }
    return false;

}


function square(a){
    a = parseFloat(a);
    if (isNumeric(a)){
        return a*a;
    }
    return false;
}

function sumOfSquares(a, b){

    if (isNumeric(a) && isNumeric(b)){
        return square(a) + square(b);
    }
    return false;;
}

function isPalindrome(a){
    if (!isNumeric(a) && a !== undefined){
        let arr = a.split('');
        arr.reverse();
        arr  = arr.join('');

        return ( arr.toUpperCase() === a.toUpperCase())
    }
    return false;
}