function sayMyName() {
  console.log("F");
  console.log("E");
  console.log("N");
  console.log("I");
  console.log("L");
}

// sayMyName()

// function addTwoNumber (num1, num2){
//     console.log(num1 + num2)
// }
function addTwoNumber(num1, num2) {
  let result = num1 + num2;
  return result;
}
console.log(addTwoNumber(1, 5));

function userInfo(name) {
  if (!name) {
    console.log("name is required");
    return;
  }
  return `${name} just logged in`;
}

console.log(userInfo("fenil"));

function calculateCartPrice(val1, val2, ...num) {
  return num;
}

console.log(calculateCartPrice(200, 300, 400, 500));

const user = {
  username: "fenil",
  price: 399,
};

function userInfo(anyInfo) {
  console.log(`userName is ${anyInfo.username} and price is ${anyInfo.price}`);
}

userInfo(user);
// userInfo({
//   username: "fenil",
//   price: 399,
// });

const numArray = [200, 300, 400, 500];

function numFunc(value) {
  return value;
}

console.log(numFunc(numArray));
// console.log(numFunc([200,500,800]))
