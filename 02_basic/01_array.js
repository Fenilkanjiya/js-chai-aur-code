const arr1 = [1,2,4,true, 'fenil']
const hero = ['saktiman', 'bajarangbali']
const arr2 = new Array(1,4,5,6,4)  // array declration

console.log(arr1, hero, arr2)

// methods
// push, pop, unshift, shift

console.log(arr2.includes(5))
console.log(arr2.indexOf(5))

const newArray = arr2.join()
console.log(typeof newArray)

// slice, splice

newA1 = arr2.slice(1, 3)
console.log('A', arr2)
console.log(newA1)
console.log('B', arr2)
newA2 = arr2.splice(1, 3)
console.log(newA2)
console.log('C', arr2)