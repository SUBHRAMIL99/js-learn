// two typem of datatype primitive or non-primitiv Datatype

// javascript is a dynamically typed language.

// primitive
// 7 type: String , Number , Boolearn , null , undefined , symbol, bigInt

const score = 100
const scoreValu = 100.55
const isLoggedIn = false
let userEmail;

const id = Symbol('122')
const anotherId = Symbol('122')

console.log(id == anotherId );

const bigNumber = 522287746668n
console.log(typeof bigNumber);


//Non- Primitive (referenc)
// Array, oblejt , Function 

let heros = ["saktiman","babai","Doga"]

let myObj = {
    name : "Babai",
    age : 24
}

const myFynction = function() {
    console.log("hello World");
    
}

console.log(typeof myFynction);



