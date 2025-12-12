// ===========================================
// JavaScript Operators (Assignment → Bitwise)
// ===========================================

// ------------------------------
// 1. ASSIGNMENT OPERATORS
// ------------------------------
let x = 10; // assignment
x += 5; // x = x + 5  → 15
x -= 2; // x = x - 2  → 13
x *= 2; // x = x * 2  → 26
x /= 2; // x = x / 2  → 13
x %= 5; // x = x % 5  → 3
x **= 3; // x = x ** 3 → 27
console.log("Assignment operators:", x);

// ------------------------------
// 2. ARITHMETIC OPERATORS
// ------------------------------
let a = 5;
let b = 2;

console.log("Addition:", a + b); // 7
console.log("Subtraction:", a - b); // 3
console.log("Multiplication:", a * b); // 10
console.log("Division:", a / b); // 2.5
console.log("Modulus:", a % b); // 1
console.log("Exponent:", a ** b); // 25

// Increment & Decrement
let c = 10;
console.log("c++:", c++); // prints 10, then becomes 11
console.log("++c:", ++c); // becomes 12, prints 12

// ------------------------------
// 3. COMPARISON OPERATORS
// ------------------------------
console.log("Loose Equal (==):", 5 == "5"); // true
console.log("Strict Equal (===):", 5 === "5"); // false
console.log("Not Equal (!=):", 5 != "5"); // false
console.log("Strict Not (!==):", 5 !== "5"); // true

console.log("Greater than:", 10 > 5); // true
console.log("Less than:", 10 < 5); // false
console.log(">= :", 10 >= 10); // true
console.log("<= :", 5 <= 10); // true

// ------------------------------
// 4. LOGICAL OPERATORS
// ------------------------------
console.log("AND (&&):", true && false); // false
console.log("OR (||):", true || false); // true
console.log("NOT (!):", !false); // true

// Short-circuiting
console.log("OR short-circuit:", null || "Hello"); // "Hello"
console.log("AND short-circuit:", "Hi" && 0); // 0

// ------------------------------
// 5. BITWISE OPERATORS
// ------------------------------
console.log("Bitwise AND (&):", 5 & 1); // 1
console.log("Bitwise OR (|):", 5 | 1); // 5
console.log("Bitwise XOR (^):", 5 ^ 1); // 4
console.log("Bitwise NOT (~):", ~5); // -6
console.log("Left Shift (<<):", 5 << 1); // 10
console.log("Right Shift (>>):", 5 >> 1); // 2

// Explanation:
// 5 → 101
// 1 → 001
// 101 & 001 → 001 (1)
// 101 | 001 → 101 (5)
// 101 ^ 001 → 100 (4)
