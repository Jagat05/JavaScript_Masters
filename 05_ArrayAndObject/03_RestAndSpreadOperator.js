// ===============================================
// JavaScript: Rest Operator vs Spread Operator
// ===============================================

// ------------------------------------------------
// 1. REST OPERATOR (...)
// Purpose: COLLECT values (Pack)
// Appears ONLY on the LEFT side (LHS)
// ------------------------------------------------

// Function Parameters (collecting all arguments)
function sum(...numbers) {
  console.log("REST in function params:", numbers);
}
sum(1, 2, 3, 4); // → [1, 2, 3, 4]

// Array Destructuring with Rest
const arr = [10, 20, 30, 40];
const [first, ...restArr] = arr;

console.log("First:", first); // 10
console.log("Rest Array:", restArr); // [20, 30, 40]

// Object Destructuring with Rest
const user = { name: "Jagat", age: 22, country: "Nepal" };
const { name, ...restObj } = user;

console.log("Name:", name); // Jagat
console.log("Rest Object:", restObj);
// { age: 22, country: "Nepal" }

// ------------------------------------------------
// 2. SPREAD OPERATOR (...)
// Purpose: EXPAND values (Unpack)
// Appears ONLY on the RIGHT side (RHS)
// ------------------------------------------------

// Copying an Array using Spread
const numbers1 = [1, 2, 3];
const numbers2 = [...numbers1];

console.log("Copied Array:", numbers2); // [1, 2, 3]

// Merging Arrays with Spread
const merged = [...numbers1, 4, 5];
console.log("Merged Array:", merged); // [1, 2, 3, 4, 5]

// Copying / Extending Objects with Spread
const person = { name: "Jagat" };
const personUpdated = { ...person, age: 22 };

console.log("Updated Object:", personUpdated);
// { name: "Jagat", age: 22 }

// Spread in Function Calls (expanding values)
const maxNums = [5, 10, 15];
console.log("Max value:", Math.max(...maxNums)); // 15
