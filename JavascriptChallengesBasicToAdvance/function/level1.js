//Basic function
function greet() {
  console.log("Hello, Jagat!");
}

greet(); // calling the function

//function with parameter
function add(a, b) {
  return a + b;
}

console.log(add(5, 3));

//Anonymous Function
const hello = function () {
  //Other Example arrow function inside map,filter...
  console.log("Hello!");
};

hello();

setTimeout(() => {
  console.log("Hello!");
}, 1000);

//Arrow Function (ES6))
const multiply = (a, b) => a * b;

console.log(multiply(4, 3));

//Pure Function
function multiply1(x, y) {
  return x * y; // same input => same output
}
console.log(multiply1(4, 3));

// Impure Function
let count = 0;

function increment() {
  count++; // modifies external variable
} //Any External Resource Should not be affected
increment();
console.log(count);

// IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("IIFE executed!");
})();
