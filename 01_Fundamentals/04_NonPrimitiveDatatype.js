// ========================
//  JavaScript Objects
// ========================

// 1. Creating an Object (Object Literal)
const user = {
  name: "Jagat",
  age: 22,
  city: "Dhangadhi",
};
console.log("Object Literal:", user);

// 2. Accessing Properties
console.log("Dot notation:", user.name);
console.log("Bracket notation:", user["city"]);

// 3. Dynamic Property Access
const key = "age";
console.log("Dynamic access:", user[key]);

// 4. Adding New Properties
user.email = "rahul@example.com";
console.log("After adding email:", user);

// 5. Updating Properties
user.age = 25;
console.log("After updating age:", user);

// 6. Deleting Properties
delete user.city;
console.log("After deleting city:", user);

// 7. Methods inside Objects
const person = {
  name: "Aman",
  greet() {
    console.log("Hello! My name is", this.name);
  },
};
person.greet();

// 8. Nested Objects
const customer = {
  name: "John",
  address: {
    city: "Delhi",
    country: "India",
  },
};
console.log("Nested object city:", customer.address.city);

// ========================
//  JavaScript Arrays
// ========================

// 1. Creating Arrays
const numbers = [1, 2, 3]; // array literal
const fruits = ["apple", "banana", "mango"];
const mixed = [1, "hi", true, null, { a: 10 }, [1, 2]]; // mixed values

// 2. Accessing elements
console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "mango"

// 3. Updating elements
fruits[1] = "orange";
console.log(fruits); // ["apple", "orange", "mango"]

// 4. Array length
console.log(fruits.length); // 3

// reduce array size
fruits.length = 2;
console.log(fruits); // ["apple", "orange"]

// reset fruits
fruits.push("mango"); // now back to 3 elements

// 5. Adding/Removing Elements
numbers.push(4); // add at end
numbers.pop(); // remove from end
numbers.unshift(0); // add at start
numbers.shift(); // remove from start

console.log(numbers);

// ========================
// JavaScript Functions
// ========================

// 1. Function Declaration
// Hoisted completely — can be called before it appears
function greet() {
  console.log("Hello from function declaration!");
}
greet();

// 2. Function Expression
// NOT hoisted the same — stored as a variable
const sayHi = function () {
  console.log("Hello from function expression!");
};
sayHi();

// 3. Arrow Function (ES6)
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8

// Arrow function with no params
const hello = () => console.log("Hello!");
hello();

// 4. Default Parameters
function multiply(a, b = 2) {
  return a * b;
}
console.log(multiply(5)); // 10
