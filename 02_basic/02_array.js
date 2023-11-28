const color = ['red', 'green', 'blue']
const fruit = ['mango', 'orange', 'banana']

// color.push(fruit)
// console.log(color[0])
const combination= color.concat(fruit)
console.log(combination)

const added = [...color, ...fruit]
console.log(added)

const another_array = [1,2,3,[4,5],6,7,[8,9,[5,6]],5]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray('hitesh'))
console.log(Array.from('hitesh'))
console.log(Array.from({name: 'fenil'}))   // intersting   you also pass a data which is you conver array like a key or value

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1, score2, score3));  // conver multiple values into the same array
