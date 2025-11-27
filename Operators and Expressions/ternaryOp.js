// =============================================
// JavaScript Conditional (Ternary) Operator
// =============================================

// ---------------------------------------------
// 1. Basic Ternary Example
// ---------------------------------------------
let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result); // "Adult"

// ---------------------------------------------
// 2. Nested Ternary (Multiple Conditions)
// ---------------------------------------------
let score = 85;
let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 50 ? "C" : "Fail";

console.log(grade); // "B"

// ---------------------------------------------
// 3. Ternary Inside Console.log
// ---------------------------------------------
const isLoggedIn = true;
isLoggedIn ? console.log("Welcome!") : console.log("Please log in");

// ---------------------------------------------
// 4. Ternary for Assignments
// ---------------------------------------------
let price = 120;
let discount = price > 100 ? 20 : 5;
console.log(discount); // 20

// ---------------------------------------------
// 5. Ternary Inside Template Literals
// ---------------------------------------------
let isMember = false;
let msg = `Discount: ${isMember ? "10%" : "0%"}`;
console.log(msg); // "Discount: 0%"

// ---------------------------------------------
// 6. Simple Truthy/Falsy Ternary
// ---------------------------------------------
let name = "";
let displayName = name ? name : "Guest";
console.log(displayName); // "Guest"

// Shorter alternative (not ternary but useful):
console.log(name || "Guest");

// ---------------------------------------------
// 7. Ternary with Boolean Conditions
// ---------------------------------------------
const isRain = true;
console.log(isRain ? "Take umbrella" : "Enjoy the weather");

// ---------------------------------------------
// 8. Interview Examples
// ---------------------------------------------

// Example 1
console.log(0 ? "True" : "False"); // "False" (0 is falsy)

// Example 2
let x = 10;
let y = x > 5 ? x++ : --x;
console.log(x, y); // 11, 10  (x++ returns the old value)

// Example 3
let a = null;
console.log(a ? "Has value" : "Empty"); // "Empty"
