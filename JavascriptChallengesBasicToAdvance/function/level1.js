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

(() => {
  console.log("IIFE executed!");
})();

// Recursive Function
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

// Calculate total price of products in the cart
function calculateTotalPrice(cartItems) {
  return cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

const cart = [
  { product: "Laptop", price: 1000, quantity: 2 },
  { product: "Phone", price: 500, quantity: 3 },
];
console.log(calculateTotalPrice(cart)); // Output: 3500
