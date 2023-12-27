const user = {
    username: 'Fenil',
    website: 'youtube',
    welcomeMessage: function(){
        console.log(`${this.username} or ${this.website}`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = 'sam'
// user.welcomeMessage()

// console.log(this)

const chai = (num1, num2) => {
    return num1 + num2
}

const chai2 = (num1, num2) => num1 + num2

const chai3 = () => ({username : 'sam', password : 'fsdf'})

// when user round breakes, so can't write return keyword

console.log(chai(5, 6))
console.log(chai2(5, 6))
console.log(chai3())