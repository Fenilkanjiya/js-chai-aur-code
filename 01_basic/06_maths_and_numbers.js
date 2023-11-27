const score = 400
console.log(score)

const balance = new Number(400)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber = new Number(123.60)
console.log(otherNumber.toPrecision(4))  // after decimal value which number of print, it's use to most of e-commer

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))   // to print number to redable formate

//+++++++++++++++++++++++++ Math +++++++++++++++++++++++++++++++++++++

// available byDefault libreary to js
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.5))
console.log(Math.ceil(4.6))
console.log(Math.floor(4.6))
console.log(Math.min(2,4,9,7,5,6))
console.log(Math.max(2,4,9,7,5,6))

console.log(Math.random())
console.log(Math.floor(Math.random() * 10))

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min) + 1) + min)