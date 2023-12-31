const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const obj in myObject) {
  console.log(`${obj} : ${myObject[obj]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const arr in programming) {
  console.log(programming[arr]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// map is not iterable 

for(const key in map){
    console.log(key)
}