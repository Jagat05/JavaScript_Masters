// ======================================================
// OBJECTS IN JAVASCRIPT
// Key-Value data structure
// Used to store data in a structured way
// ======================================================

// 1. BASIC OBJECT
const user = {
  name: "Jagat",
  age: 22,
  country: "Nepal",
};

console.log(user.name); // Access using dot notation
console.log(user["age"]); // Access using bracket notation

// ------------------------------------------------------
// 2. ADDING & UPDATING VALUES
// ------------------------------------------------------

user.email = "jagat@example.com"; // Add new key
user.age = 23; // Update value

console.log(user);
// { name: 'Jagat', age: 23, country: 'Nepal', email: 'jagat@example.com' }

// ------------------------------------------------------
// 3. DELETING A PROPERTY
// ------------------------------------------------------

delete user.country;

console.log(user);
// { name: 'Jagat', age: 23, email: 'jagat@example.com' }

// ------------------------------------------------------
// 4. NESTED OBJECTS
// ------------------------------------------------------

const student = {
  name: "Jagat",
  address: {
    city: "Dhangadhi",
    ward: 5,
  },
};

console.log(student.address.city); // Dhangadhi

// ------------------------------------------------------
// 5. METHODS IN OBJECTS (Function inside object)
// ------------------------------------------------------

const person = {
  name: "Jagat",
  greet: function () {
    console.log("Hello " + this.name);
  },
};

person.greet(); // Hello Jagat

// ------------------------------------------------------
// 6. OBJECT DESTRUCTURING
// ------------------------------------------------------

const product = {
  title: "Laptop",
  price: 45000,
};

const { title, price } = product;

console.log(title); // Laptop
console.log(price); // 45000

// ------------------------------------------------------
// 7. SPREAD WITH OBJECTS (copy / merge)
// ------------------------------------------------------

const obj1 = { a: 10, b: 20 };
const obj2 = { ...obj1, c: 30 };

console.log(obj2);
// { a: 10, b: 20, c: 30 }

// ------------------------------------------------------
// 8. REST WITH OBJECTS (collect remaining)
// ------------------------------------------------------

const car = {
  brand: "Tesla",
  model: "S",
  color: "Red",
};

const { brand, ...others } = car;

console.log(brand); // Tesla
console.log(others);
// { model: 'S', color: 'Red' }

// ------------------------------------------------------
// 9. OBJECT METHODS (keys/values/entries)
// ------------------------------------------------------

const info = {
  name: "Jagat",
  age: 22,
};

console.log(Object.keys(info)); // ['name', 'age']
console.log(Object.values(info)); // ['Jagat', 22]
console.log(Object.entries(info));
// [['name', 'Jagat'], ['age', 22]]

// ------------------------------------------------------
// 10. CHECK PROPERTY EXISTENCE
// ------------------------------------------------------

console.log("name" in info); // true
console.log("email" in info); // false
