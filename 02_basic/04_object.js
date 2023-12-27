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

const obj4 = { ...obj1, ...obj2 }; // spread objects
const obj5 = [obj1, obj2]; // object inside object
const obj6 = Object.assign(obj1, obj2, obj3); // assign objects list into the first objrct list

console.log(obj4);
console.log(obj5);
console.log(obj6);

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
];

console.log(users[1].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // convert every object to array pair

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

const { courseInstructor: fenil } = course;
console.log(fenil);
