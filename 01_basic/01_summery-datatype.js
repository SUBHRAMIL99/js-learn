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



// *-***  ++   Memeory ++ *** //

// Stack Memory (primitive) //and\\ Heap Memory (Non-Primitive)

// Stach give a Copy data
let value = "hello babai"
let anotheName = value
anotheName = "subhranil"

console.log(value);
console.log(anotheName);



// heap give original data 

let userObj={
    nemae: "Subhranil",
    age: 24
}

let userTwo = userObj

userTwo.age = 22

console.log(userObj);
console.log(userTwo);

