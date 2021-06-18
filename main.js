// Whole-Script strict mode syntax
// flexible == dangerous
// added ECMAScript 5 
'use strict';

let a;
a = 6;

console.log('Hello World!');


//default function parameter
function multiply(a, b = 1 ) {
    return a * b;
}

console.log(multiply(5, 2));
//expected output : 10
console.log(multiply(5));
//expected output : 5 (not NaN)


// function multiply(a, b) {
//     return a * b;
// }

// console.log(multiply(5, 2));
// //expected output : 10
// console.log(multiply(5));
// //expected output : NaN


// function multiply(a, b) {
//     b = (typeof b !== 'undefined') ? b : 1
//     return a * b;
// }

// console.log(multiply(5, 2));
// //expected output : 10
// console.log(multiply(5));
// //expected output : NaN


//undefined vs falsy values

function test(num = 1) {
    console.log(typeof num)
}

test()
test(undefined)

test('')  // 'string'
test(null)  // 'object'

function append (value, array = []) {
    array.push(value)
    return array
}

//in console
// append(1) //[1]
// append(2) //[2]



//when we uses function or variable
function callSomething(thing = something()) {
    return thing
}

let numberOfTimesCalled = 0
function something() {
    numberOfTimesCalled += 1
    return numberOfTimesCalled
}

// callSomething()  //1
// callSomething()  //2
























