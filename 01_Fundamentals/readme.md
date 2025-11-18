# JavaScript Variable Notes

This project contains simple and clear examples explaining **var**, **let**, **const**, scope, hoisting, and good practices in JavaScript.  
The purpose is to help you quickly recall core concepts and revise them anytime.

---

## 📌 Topics Covered

# 🚀Variable

## 📌 01-->

### 1. Variable Declarations

- **var** – function scoped, avoid using
- **let** – block scoped, value can change
- **const** – block scoped, value cannot be reassigned

### 2. Scope

- Block scope (`let`, `const`)
- Function scope (`var`)

### 3. Hoisting

- `var` gets hoisted (initialized as `undefined`)
- `let` & `const` are hoisted but **not initialized** → cause `ReferenceError`

### 4. const with Objects & Arrays

- `const` objects & arrays can be **modified**, but not **reassigned**

### 5. Good Practices

- Use `let` only when values change
- Prefer `const` for fixed values
- Avoid `var` in modern JavaScript

# 🚀 What is Hoisting?

## 📌 02-->

Hoisting means:

> **JavaScript moves declarations (not values) to the top of their scope before code runs.**

This happens automatically during the creation phase.

---

## 1. Hoisting of `var`

```js
console.log(a); // undefined
var a = 10;
```

- `var` is hoisted
- It becomes **undefined** during hoisting
- Can be accessed before its line (but value = undefined)

---

## 2. Hoisting of `let` and `const`

```js
console.log(b); // ReferenceError
let b = 10;
```

- `let` & `const` are hoisted but **not initialized**
- They stay in the **Temporal Dead Zone (TDZ)**
- Using them early → **ReferenceError**

---

## 3. Function Declarations

```js
sayHi(); // Hi

function sayHi() {
  console.log("Hi");
}
```

- Fully hoisted with full function body
- Can be called before they appear in code

---

## 4. Function Expressions

```js
sayHello(); // TypeError

var sayHello = function () {
  console.log("Hello");
};
```

- Only the variable name is hoisted → `undefined`
- Function value is **not** hoisted
- Calling before assignment → **TypeError**

---

## Summary Table

| Type                     | Hoisted?  | Value During Hoisting | Can Use Before Line? |
| ------------------------ | --------- | --------------------- | -------------------- |
| **var**                  | Yes       | `undefined`           | ✔ Yes (undefined)    |
| **let**                  | Yes       | TDZ (not initialized) | ❌ No                |
| **const**                | Yes       | TDZ (not initialized) | ❌ No                |
| **function declaration** | Yes       | Full function body    | ✔ Yes                |
| **function expression**  | Only name | `undefined`           | ❌ No (TypeError)    |

---

# 🚀Primitive Data Types

## 📌 03

Primitive values are:

- **Not objects**
- **Immutable** (value cannot be changed)
- **Stored by value**

JavaScript has **7 primitive types**:

1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. Symbol
7. BigInt

---

## 🟩 1. STRING

```js
const name = "Rahul"; // string using double quotes
const city = "Mumbai"; // string using single quotes
const greeting = `Hello!`; // template literal
console.log("String examples:", name, city, greeting);
```

### ✔ Strings are immutable

```js
let str = "Hello";
str[0] = "J"; // does nothing
console.log("String immutability:", str); // still "Hello"
```

---

## 🟦 2. NUMBER

```js
const age = 25;
const pi = 3.14;
console.log("Numbers:", age, pi);
```

### Special Number values

```js
console.log("Infinity:", Infinity);
console.log("-Infinity:", -Infinity);
console.log("NaN example:", "abc" - 5); // NaN
```

---

## 🟧 3. BOOLEAN

```js
const isLoggedIn = true;
const isAdmin = false;
console.log("Booleans:", isLoggedIn, isAdmin);
```

---

## 🟨 4. UNDEFINED

```js
let a; // declared but not assigned
console.log("Undefined:", a); // undefined
```

---

## 🟫 5. NULL

```js
let data = null; // intentional empty value
console.log("Null:", data);
```

### Interview Pitfall

```js
console.log("typeof null:", typeof null); // "object" (JS bug)
```

---

## 🟪 6. SYMBOL

```js
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log("Symbols unique:", id1 === id2); // false
```

- Symbols create **unique identifiers**.
- Even with the same description, symbols are **always different**.

---

## 🟫 7. BIGINT

```js
const bigNumber = 123456789012345678901234567890n;
console.log("BigInt:", bigNumber);
```

- Used for extremely large integers.
- Ends with **n**.

---

## 🧠 Primitive Values Are Stored by Value

```js
let x = 10;
let y = x;
x = 20;
console.log("Stored by value example:", y); // 10
```

- Changing `x` does not change `y`.

---

## ✅ Quick Summary Table

| Type      | Example    | Notes                |
| --------- | ---------- | -------------------- |
| String    | "Hello"    | Immutable            |
| Number    | 10, 3.14   | One number type only |
| Boolean   | true/false | Logic values         |
| Undefined | let a;     | Not assigned         |
| Null      | null       | Intentional empty    |
| Symbol    | Symbol()   | Always unique        |
| BigInt    | 10n        | Huge integers        |

---

Use this README to revise before interviews or while practicing JavaScript basics.

---
