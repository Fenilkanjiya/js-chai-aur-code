const isUserloggedIn = true
const temperature = 51

if(temperature >= 50){
    console.log('temerature more than 50')
}else{
    console.log('temperature less than 50')
}

const score = 200
if(score > 100){
    let power = 'fly'
    console.log(`let ${power}`)
}

// console.log(power)
const balance = 600
// if (balance > 500) console.log("test"),console.log("test2");   this is a wrong code syntex

if(balance < 500) {
    console.log('balance less than 500')
}else if(balance < 750){
    console.log('balance less than 750')
}else {
    console.log('balance greater than 750')
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 3==2){
    console.log('allow to buy cards')
}
if(userLoggedIn || debitCard || 2==3){
    console.log('yes allow')
}