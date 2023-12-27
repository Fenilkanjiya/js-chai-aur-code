// const tinder = new Object();   // create a new object

const tinderUser = {};

tinderUser.id = "sdfsd5";
tinderUser.name = "sunny";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const ragularUser = {
  email: "user@email.com",
  fullname: {
    userFullname: {
      firstName: "fenil",
      lastName: "kanjiya",
    },
  },
};

console.log(ragularUser.email);
console.log(ragularUser.fullname.userFullname.firstName); // access nested objects

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

const obj4 = { ...obj1, ...obj2 };  // spread objects
const obj5 = [obj1, obj2];   // object inside object
const obj6 = Object.assign(obj1, obj2, obj3);  // assign objects list into the first objrct list

console.log(obj4);
console.log(obj5);
console.log(obj6);
