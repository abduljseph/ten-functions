"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

// Question 1
function isTrue(input){
    return input===true;
}
function isFalse(input) {
    return input ===false;
}

function isEven(input){
    return input === true;
}

function isEqual(input){
   return input === true;
}

function addOne(num) {
    if (typeof num === 'string') {
        num = parseInt(num);
    }
    return num + 1;
}

function not(value) {
    return !value;
}

JavaScript

function and(value1, value2) {
    if (typeof value1 !== 'boolean' || typeof value2 !== 'boolean') {
        throw new TypeError('Both arguments must be of type Boolean');
    }
    return value1 && value2;
}

function concat(...args) {
    return args.join('');
}
const result = concat('hello', 'world');
console.log(result);

function or(value1, value2) {
    if (value1 || value2) {
        return true;
    }
    return false;
}

function isIdentical(value1, value2) {
    return value1 === value2;
}


const isEven = (input) => {
    if (
        typeof input === 'number' || typeof input === 'string' && !isNaN(input)
    ) {
        return input % 2 === 0;
    }
    return false;







