// Immediately Invoked Function Expressions (IIFE)

///  syntax ()()

(function () {
  console.log("db connected");
})();

((name) => {
  console.log(`DB connected ${name}`);
})("fenil");
