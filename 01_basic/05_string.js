const name = 'Fenil'
const repoCount = 50

console.log(name + repoCount + " Value")
console.log(`hello, my name is ${name.toUpperCase()} and my repoCount is ${repoCount}`)

const gameName = new String('Fenil')
console.log(gameName)
console.log(gameName.__proto__)

console.log(gameName.charAt(2))
console.log(gameName.indexOf('i'))

console.log(gameName.substring(0, 3))
console.log(gameName.slice(-4, 4))

const newStringOne = '    Fenil   kanjiya   '
console.log(newStringOne.trim())

const url = 'https/::hitesh%20chaudhary.com'
console.log(url.replace('%20', '-'))
console.log(url.includes('hitesh'))

const game = 'alfa-noy-tiwind-asset'
console.log(game.split('-'))  // return array