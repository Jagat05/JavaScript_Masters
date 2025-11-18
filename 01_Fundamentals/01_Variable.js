// ========================
// 1. Variable Declaration
// ========================

// var (old - avoid) --Global Scope
var userName = "Jagat";

// let (use when value changes)
let age = 22;

/*age = 40;
console.log(age); --> It's Output is 40*/

// const (fixed value)
const country = "Nepal";
/*country = "India";
console.log(country);  --> It's throws error*/

// ========================
// 2. Scope Examples
// ========================

// Block Scope (let & const)
{
  let x = 10;
  const y = 20;
  console.log(x, y); // Works
}
// console.log(y);
// console.log(x); // Error: x is not defined

// Function Scope (var)
function testVar() {
  var message = "Hello var";
  console.log(message);
}
testVar();
// console.log(message); // Error

// ========================
// 3. Hoisting
// ========================

console.log(a); // undefined (var hoisting)
var a = 5;

// console.log(b); // ReferenceError (let hoisting)
let b = 10;

// ========================
// 4. const with Objects & Arrays
// ========================

const student = { name: "Jagat", age: 22 };
student.age = 23; // ✔ allowed

// student = {}; // ❌ Error: Assignment to constant variable

// Array example
const numbers = [1, 2, 3];
numbers.push(4); // ✔ allowed

// numbers = [5,6]; // ❌ not allowed

// ===========================
// 5. Good Practices Examples
// ===========================

let count = 0;
count++;

const API_URL = "https://example.com";
