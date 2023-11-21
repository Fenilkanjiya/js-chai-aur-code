const score = true

console.log(typeof score)
console.log(typeof (score))

const scoreInNumber = Number(score)

console.log(typeof scoreInNumber)
console.log(scoreInNumber)

console.log(typeof NaN)

const secondScore = null;
console.log(secondScore)

// "33" => 33
// '33abc' => NaN
// true => 1 , false => 0

let isLoggedIn = 0
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)

//++++++++++++++++++++++++++++Operations+++++++++++++++++++++++++++
 let value = 3
 let negValue = -value
 console.log(negValue)

 let str1 = 'Hello'
 let str2 = ' Fenil'

 let str3 = str1 + str2
 console.log(str3);

 console.log('1' + 2)
 console.log('1' + 2 + 2)
 console.log(1 + 2 + '2')

 console.log(+true)
 console.log(+'')