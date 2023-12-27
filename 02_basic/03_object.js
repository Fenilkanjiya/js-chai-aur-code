const mySymbols = Symbol("key1");

const jsUser = {
  name: "Fenil",
  age: 18,
  location: "Ahmedabad",
  email: "fenil@gmail.com",
  "full name": "fenil kanjiya",
  [mySymbols]: "this is a symbol",
  isLoggedIn: false,
  lastLoggedDays: ["monday", "sunday"],
  greeting: function () {},
  greetingTwo: function () {
    console.log(`hello ${this.name}`);
  },
};

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser["lastLoggedDays"]);

jsUser.email = "krish@gmail.com";
Object.freeze(jsUser); // freeze to change object value
jsUser.email = "sfd@gmail.coom";
console.log(jsUser.email);

// create a function

jsUser.greeting = function () {
  console.log("Hello JS user");
};

// jsUser.greetingTwo = function () {
  
// };

console.log(typeof jsUser);
console.log(jsUser.hasOwnProperty("greeting"));
console.log(typeof jsUser.greeting);

console.log(jsUser.greeting());
jsUser.greetingTwo()
