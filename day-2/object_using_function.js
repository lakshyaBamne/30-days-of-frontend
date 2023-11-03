"use strict"

function makeObject(name, age, carName){
    this.name = name,
    this.age = age,
    this.carName = carName
};

let myObject = new makeObject("Lakshya", 21, "Toyota");

console.log(typeof myObject);

