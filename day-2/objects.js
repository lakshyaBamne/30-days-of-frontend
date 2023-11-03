"use strict"
/*
    ! Objects in JavaScript are a collection of key-value pairs
    -> when the value of a property becomes a function, it is called a method
*/

// Create an object called person with properties name, age, and city.
let person1 = {
    name : "Lakshya Bamne",
    age : 21,
    city : "Jabalpur"
};

let person2 = {
    name : "Patwik Sandey",
    age : 20,
    city : "Mumbai"
};

console.table(person1);

// Access the value of the name property and assign it to a variable called personName
let personName = person1.name;

console.log(personName);

// Add a new property to the person object called occupation with a value of "student".
person1.occupation = "student";
person2.occupation = "unemployed";

console.table(person1);

// Add a new function property (also called a method) to the person object 
// called printInfo that prints the following:
// ”Hi, I am {name}. I am {age} years old and I live in {city}.”

person1.printInfo = function () {
    console.log(`Hi, I am ${person1.name}, I am ${person1.age} years old and I live in ${person1.city}`);
};

person2.printInfo = function () {
    console.log(`Hi, I am ${person2.name}, I am ${person2.age} years old and I live in ${person2.city}`);
};

person2.printInfo();

