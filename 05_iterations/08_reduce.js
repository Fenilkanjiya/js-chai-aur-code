const numArr = [1,2,3,4]

const sum = numArr.reduce((acc, curr) => acc + curr, 0)

console.log(sum)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(totalPrice)