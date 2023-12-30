const number = [1, 2, 3, 4, 5, 6, 7];

for (const num of number) {
  console.log(num);
}

const grettings = "hello world";

for (const great of grettings) {
  if (great == " ") {
    continue;
  }
  console.log(great);
}

const map = new Map();
map.set("IN", "india");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

// map is used to unique value it is not return to duplicate values
console.log(map)
for (const [key, value] of map) {
  console.log(`${key} :- ${value}`);
}


// object iterations

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// using for of loop, can't iterate object directly

for(const key of Object.keys(myObject)){
    console.log(key)
}