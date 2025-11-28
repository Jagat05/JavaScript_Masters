// ===========================================
// 1. Creating Arrays
// ===========================================

// Array literal
const fruits = ["apple", "banana", "mango"];
console.log("Array literal:", fruits);

// Array with mixed types
const mixed = [10, "hello", true, { a: 1 }, [1, 2]];
console.log("Mixed array:", mixed);

// Using new Array()
const arr2 = new Array(3);
console.log("new Array(3):", arr2); // [ <3 empty items> ]

// ===========================================
// 2. Accessing & Updating Values
// ===========================================

console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "mango"

fruits[1] = "orange"; // update
console.log("Updated fruits:", fruits);

// ===========================================
// 3. Array Length
// ===========================================

console.log("Length:", fruits.length);

fruits.length = 2; // reduce size
console.log("Reduced length →", fruits);

fruits.length = 3; // extends with empty slot
console.log("Extended length →", fruits);

// ===========================================
// 4. Adding & Removing Elements
// ===========================================

const numbers = [1, 2, 3];

numbers.push(4); // add at end
console.log("push:", numbers);

numbers.pop(); // remove from end
console.log("pop:", numbers);

numbers.unshift(0); // add at start
console.log("unshift:", numbers);

numbers.shift(); // remove from start
console.log("shift:", numbers);

// ===========================================
// 5. Combining Arrays
// ===========================================

const a = [1, 2];
const b = [3, 4];

const c = a.concat(b);
console.log("Concatenated:", c);

// ===========================================
// 6. Searching in Arrays
// ===========================================

const items = ["a", "b", "c", "b"];

console.log("indexOf:", items.indexOf("b")); // 1
console.log("lastIndexOf:", items.lastIndexOf("b")); // 3
console.log("includes:", items.includes("c")); // true

// ===========================================
// 7. Looping Through Arrays
// ===========================================

const letters = ["x", "y", "z"];

// Classic for loop
for (let i = 0; i < letters.length; i++) {
  console.log("for loop:", letters[i]);
}

// for...of loop
for (let item of letters) {
  console.log("for...of:", item);
}

// forEach
letters.forEach((item) => console.log("forEach:", item));

// ===========================================
// 8. Arrays Are Objects (Reference Type)
// ===========================================

const arrA = [1, 2];
const arrB = arrA; // reference copy

arrB.push(3);

console.log("arrA:", arrA); // [1, 2, 3]
console.log("arrB:", arrB); // [1, 2, 3]

// Clone array instead of referencing
const arrC = [...arrA];
arrC.push(100);

console.log("Cloned (spread):", arrC);

// ===========================================
// 9. Nested Arrays
// ===========================================

const nested = [1, [10, 20], [30, [40]]];
console.log("nested:", nested[1][1]); // 20
console.log("deep nested:", nested[2][1][0]); // 40

// ===========================================
// 10. Sorting Arrays
// ===========================================

const nums = [3, 1, 5, 2];
nums.sort(); // sorts lexicographically
console.log("sort:", nums);

nums.sort((a, b) => a - b); // correct numeric sort
console.log("numeric sort:", nums);

// ===========================================
// 11. Useful Array Methods (basics)
// ===========================================

const arr = [1, 2, 3, 4];

// map → transforms each element
const doubled = arr.map((n) => n * 2);
console.log("map:", doubled);

// filter → returns elements that pass test
const even = arr.filter((n) => n % 2 === 0);
console.log("filter:", even);

// reduce → accumulates values
const sum = arr.reduce((acc, val) => acc + val, 0);
console.log("reduce:", sum);
