const date = new Date()

console.log(date)
console.log(date.toString())
console.log(date.toDateString())
console.log(date.toLocaleString())
console.log(typeof date)

const createDate = new Date(2023, 0, 12, 5, 30)
const createDateOne = new Date('2023-05-11')
const createDateTwo = new Date('11-05-2024')
console.log(createDate.toDateString())
console.log(createDate.toLocaleString())
console.log(createDateOne.toLocaleString())
console.log(createDateTwo.toLocaleString())

const timeStamp = Date.now()
console.log(timeStamp)
console.log(createDateTwo.getTime())

const newDate = new Date()
console.log(newDate.getDate())
console.log(newDate.getMonth() + 1)
console.log(newDate.getFullYear())

const formate = newDate.toLocaleString('default', {
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    second: '2-digit'
})
console.log(formate)