const userEmail = [];

if (userEmail) {
  console.log("got user email");
} else {
  console.log("no user email");
}

// falsy values
// 0, -0, false, BigInt 0n, "", null, undefined, NaN

// truhy values
// "0", "false", [], {}, function(){}

if (userEmail.length == 0) {
  console.log("array is empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;

// val1 = 5 ?? 10;
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 15;  // always return first truthy value 

console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
