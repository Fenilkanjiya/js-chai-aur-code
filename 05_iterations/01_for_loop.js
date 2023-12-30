for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element === 5) {
    console.log("5 is a best number");
  }
  console.log(element);
}

// table of 5

for (let i = 5; i == 5; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// print array value
let myArray = ["flash", "batman", "superman"];
for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  console.log(element);
}

// breack and continue

for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log("5 dedacted");
    // break;
    continue;
  }
  console.log(i);
}
