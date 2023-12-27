//var c = 300    globle scope
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  console.log("INNER: ", a);
  //  Both A's value are different because of scope
}

console.log(a);
// console.log(b);   can't access B to globle bcz it's a block scope
// console.log(c);

/// closer
/// outer variable access to innter function but innter variable is not acccess ti outside
/// also called exicution context
function one() {
  const username = "Fenil";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website)
  two();
}

console.log("outer console before calling function");
one();

/// hoisting
/// normal function can't be hoisted

addOne(5);

function addOne(num) {
  return num + 1;
}
addTwo(5); // This is a hoisting ... can't access addTwo befaure initialization

const addTwo = function (num) {
  return num + 2;
};
