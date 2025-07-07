// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id == anotherID);

// const BigNumber = 324378246542309542365n



// Reference type(Non primitive) 
// Array, Objects,  Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Aditya",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof BigNumber);
