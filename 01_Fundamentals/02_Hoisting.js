// ------------------------------------------
// 1 — Hoisting of var
// ------------------------------------------

console.log(a); // Output: undefined
// Why? Because 'var a' is hoisted to the top of its scope
// Internally JavaScript does:
// var a;        // hoisted and set to undefined
// console.log(a);
// a = 10;

var a = 10;

// ------------------------------------------
// 2 — Hoisting of let / const
// ------------------------------------------

// console.log(b);
// ❌ ReferenceError: Cannot access 'b' before initialization
// Why? 'let b' is hoisted but not initialized.
// This uninitialized state is called the Temporal Dead Zone (TDZ).

let b = 10; // initialized AFTER this line is executed

// ------------------------------------------
// 3 — Function Declaration Hoisting
// ------------------------------------------

sayHi(); // ✔ Works! Output: Hi
// Why? Function declarations are hoisted with their entire function body.
// Internally JavaScript behaves like the function exists at the top.

function sayHi() {
  console.log("Hi");
}

// ------------------------------------------
// 4 — Function Expressions NOT fully hoisted
// ------------------------------------------

// sayHello();
// ❌ TypeError: sayHello is not a function
// Why? Only the variable name 'sayHello' is hoisted (var), not the function value.
// Internally:
// var sayHello = undefined;
// sayHello(); // calling undefined → TypeError

var sayHello = function () {
  console.log("Hello");
};

sayHello(); // ✔ Works here
