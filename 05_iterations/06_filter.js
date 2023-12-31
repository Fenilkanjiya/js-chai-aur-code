// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);   values can't be print

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum = myNums.filter((val) => val > 5);

// using forEach

const forEachArr = [];

newNum.forEach((val) => {
  if (val > 5) {
    forEachArr.push(val);
  }
});
console.log(forEachArr);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

const historyBooks = books.filter((val) => val.genre === "History");

const after20s = books.filter(
  (val) => val.publish >= 1995 && val.genre === "History"
);

console.log(historyBooks);
console.log(after20s);
