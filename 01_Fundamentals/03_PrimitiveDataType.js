// JavaScript Primitive Data Types Examples

// 1. STRING
const name = "Rahul"; // string using double quotes
const city = "Mumbai"; // string using single quotes
const greeting = `Hello!`; // template literal
console.log("String examples:", name, city, greeting);

// Strings are immutable
let str = "Hello";
str[0] = "J"; // does nothing
console.log("String immutability:", str); // still "Hello"

// 2. NUMBER
const age = 25;
const pi = 3.14;
console.log("Numbers:", age, pi);

// Special number values
console.log("Infinity:", Infinity);
console.log("-Infinity:", -Infinity);
console.log("NaN example:", "abc" - 5); // NaN

// 3. BOOLEAN
const isLoggedIn = true;
const isAdmin = false;
console.log("Booleans:", isLoggedIn, isAdmin);

// 4. UNDEFINED
let a; // declared but not assigned
console.log("Undefined:", a); // undefined

// 5. NULL
let data = null; // intentional empty value
console.log("Null:", data);

// typeof null (interview question)
console.log("typeof null:", typeof null); // "object" (JS bug)

// 6. SYMBOL
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log("Symbols unique:", id1 === id2); // false

// 7. BIGINT
const bigNumber = 123456789012345678901234567890n;
console.log("BigInt:", bigNumber);

// Primitive: Stored by value
let x = 10;
let y = x;
x = 20;
console.log("Stored by value example:", y); // 10
