// ==========================================================
// 1. GLOBAL SCOPE
// ==========================================================

let g = "I am global"; // globally scoped

function showGlobal() {
  console.log(g); // ✔ can access
}

showGlobal();
console.log(g); // ✔ can access everywhere

// ==========================================================
// 2. FUNCTION SCOPE (Local Scope)
// ==========================================================

function test() {
  let x = 100; // function-scoped
  console.log("Inside function:", x); // ✔ works
}

test();
// console.log(x); // ❌ ERROR: x is not defined

// ==========================================================
// 3. BLOCK SCOPE (let & const)
// ==========================================================

{
  let a = 10;
  const b = 20;
  // var c = 30; // var is NOT block-scoped
}

// console.log(a); // ❌ ERROR
// console.log(b); // ❌ ERROR
// console.log(c); // ✔ works (var escapes block) — BAD!

/* ==========================================================
   4. LEXICAL SCOPE
   (A function can access variables from its parent)
   ========================================================== */

function outer() {
  let msg = "Hello from outer";

  function inner() {
    console.log(msg); // ✔ can access parent's variable
  }

  inner();
}

outer();

// ==========================================================
// 5. CLOSURES — MOST IMPORTANT
// Closure = a function remembers its parent scope
// even after the parent function finished execution
// ==========================================================

function counterFunction() {
  let count = 0; // private variable

  return function () {
    count++;
    console.log("Count:", count);
  };
}

const counter = counterFunction();

counter(); // 1
counter(); // 2
counter(); // 3

// ==========================================================
// Closure Example: Private Variable / Data Privacy
// ==========================================================

function createBank() {
  let balance = 100; // private inside closure

  return {
    deposit(amount) {
      balance += amount;
      console.log("Deposit:", balance);
    },
    withdraw(amount) {
      balance -= amount;
      console.log("Withdraw:", balance);
    },
  };
}

const bank = createBank();
bank.deposit(50); // 150
bank.withdraw(30); // 120

// ==========================================================
// Closure Example: Function Factory (important in interviews)
// ==========================================================

function multiply(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiply(2);
console.log(double(10)); // 20

const triple = multiply(3);
console.log(triple(10)); // 30

// ==========================================================
// Closure Example: setTimeout
// ==========================================================

function greetLater() {
  let name = "JavaScript";

  setTimeout(function () {
    console.log("Hello", name); // closure remembers name
  }, 1000);
}

greetLater();

// ==========================================================
// Closure Example: Loop + let (works correctly)
// ==========================================================

for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log("i =", i); // 1, 2, 3
  }, i * 500);
}

// ==========================================================
// Closure Example: Loop + var (common interview question)
// ==========================================================

for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log("var i =", i); // prints 4,4,4 (NOT 1,2,3)
  }, i * 500);
}

// WHY?
// Because var is NOT block scoped, so closure sees final i = 4!
