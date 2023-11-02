"use strict";

/*
    ! Variables in JavaScript

    -> JavaScript is dynamically typed language

    ! variables declared using these keywords are not hoisted
    -> let
    -> const

    why you should not use var keyword and no-keyword
    ! variables declared using the var keyword is hoisted to the top of global space
    ! but only the declaration is hoisted to the top and not the other statements
    -> var


    -> no keyword
*/

// This is the recommended way of declaring variables in javascript
// since javascript is dynamically typed we can change it to another data type also
let myVar = "Hello, World"

console.log(myVar)
console.log(typeof(myVar))

myVar = 10

console.log(myVar)
console.log(typeof(myVar))

// when we dont want the value of a variable to change
// we use the const keyword

const dontChangeThis = "Hello, world!! this variable cannot be changed"

console.log(dontChangeThis)


//!! Practice these following programs for revision

// 1
// let x = 1;
// {
//   let x = 2;
//   {
//     let x = 3;
//     console.log(x);
//   }
//   console.log(x);
// }
// console.log(x);

// 2

// observe here that even though x is a global variable, since we are trying to declare
// another variable with the same name in the local scope, compiler ignores the global definition
// and prioritizes the definition in the local scope and thus throws a reference error

// let x = 1;
// {
//   console.log(x);
//   let x = 2;
//   {
//     console.log(x);
//     let x = 3;
//     console.log(x);
//   }
//   console.log(x);
// }
// console.log(x);

// 3
// console.log(x);
// {
// 	var x = 2;
// 	{
// 		console.log(x);
// 		let x = 5;
// 	}
// 	console.log(x);
// }


/*
    ! Important Note

    when we have a variable in a higher scope (say global) and we try to
    declare a new variable with the same name in the lower scope (say local)
    we ignore the variable in the global scope and deal with the new declaration 
    only in the local scope and other things work as expected
*/
