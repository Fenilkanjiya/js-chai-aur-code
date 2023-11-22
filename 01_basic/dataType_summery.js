// primitive datatype

// 7 types : String, Number, Boolean, null, undefine, symbol, BigInt

const score = 300  // number
const scoreValue = 300.2  // number desimal

const isLoggedIn = false;  // boolean
const outSideTemp = null; // empty object

let userEmail;  // undefine

const id = Symbol('123')
const emailId = Symbol('123')
console.log(id === emailId) // symbol

const bigNumber = 624656564654n;  // bigInt   (n) re-present bigInt
console.log(typeof(bigNumber))

// non-primitive  (reference datatype)

// Arrays, Objects, Functions

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack memory - (store primitive datatype)   Heap memory - (store non-primitive datatype)

const myName = 'fenil'
let myNewName = myName
myNewName = 'kanjiya'   // store in stack memory 
console.log(myNewName)  // while store in second variable copy for first
console.log(myName);

const userOne = {
    email: 'user@gmail.com',
    upi: 'upi@sbi'
}

const userTwo = userOne
userTwo.email = 'fenil@gmail.com' // Heap Memory it is a direct refrence for Heap memory

console.log(userOne)
console.log(userTwo)
