// =======================================================
// 1. FUNCTION DECLARATION  (Hoisted)
// =======================================================

// You can call this function BEFORE it is defined (because it's hoisted)
greet();

function greet() {
  console.log("Hello from Function Declaration!");
}

// =======================================================
// 2. FUNCTION EXPRESSION  (NOT hoisted the same way)
// =======================================================

// You CANNOT call sayHello() before this line
const sayHello = function () {
  console.log("Hello from Function Expression!");
};

sayHello();

// =======================================================
// 3. ARROW FUNCTIONS (ES6)
// =======================================================

// Basic arrow function
const add = (a, b) => {
  return a + b;
};

console.log("Add:", add(5, 3)); // 8

// Short version (implicit return)
const multiply = (a, b) => a * b;
console.log("Multiply:", multiply(4, 6)); // 24

// Arrow function with NO parameters
const hello = () => console.log("Hello!");
hello();

// Arrow function with ONE parameter (no parentheses needed)
const square = (n) => n * n;
console.log("Square:", square(5)); // 25

// =======================================================
// 4. PARAMETERS vs ARGUMENTS
// =======================================================

// PARAMETERS = variables in function definition
function introduce(name, age) {
  console.log("My name is " + name + " and I am " + age + " years old.");
}

// ARGUMENTS = actual values you pass when calling
introduce("Rahul", 22);
introduce("Aman", 20);

// =======================================================
// 5. RETURN VALUES
// =======================================================

function sum(a, b) {
  return a + b; // returns the result to the caller
}

let result = sum(10, 5);
console.log("sum:", result);

// You can store returned values
let double = sum(5, 5) * 2;
console.log("double:", double);

// If you don't write return → function returns undefined
function noReturn() {
  console.log("I do not return anything!");
}

console.log(noReturn()); // undefined

// =======================================================
// 6. DEFAULT PARAMETERS
// =======================================================

function multiplyDefault(a, b = 2) {
  return a * b;
}

console.log(multiplyDefault(5)); // 10 (b becomes 2)
console.log(multiplyDefault(5, 10)); // 50

// =======================================================
// 7. REST PARAMETERS (Collect multiple arguments)
// =======================================================

function sumAll(...nums) {
  // nums becomes an array
  return nums.reduce((acc, cur) => acc + cur, 0);
}

console.log(sumAll(1, 2, 3, 4)); // 10

// =======================================================
// 8. FUNCTION RETURNING ANOTHER FUNCTION
// =======================================================

function outer() {
  return function inner() {
    console.log("Hello from inner function!");
  };
}

const fn = outer();
fn(); // calling returned function

// =======================================================
// 9. FUNCTIONS AS VALUES
// =======================================================

function sayHi() {
  console.log("Hi!");
}

const copy = sayHi; // assign function to variable
copy(); // same as sayHi()
