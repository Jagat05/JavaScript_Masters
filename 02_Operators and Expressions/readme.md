# JavaScript Operators & Ternary — Complete Notes (With Concepts + Code)

## 🧠 Introduction

This document gives you a **clear, beginner‑friendly + interview‑ready explanation** of:

- JavaScript **Operators**
- Assignment, Arithmetic, Comparison, Logical, Bitwise
- Short‑circuiting
- Conditional (Ternary) Operator
- Truthy & Falsy behavior
- With clean examples

These are **core JavaScript fundamentals** used in every project and interview.  
Mastering these helps you write better logic, cleaner conditions, and understand how JavaScript evaluates expressions.

---

# 🚀 JavaScript Operators

## 1. Assignment Operators

Used to assign or update values.

```js
let x = 10;
x += 5; // 15
x -= 2; // 13
x *= 2; // 26
x /= 2; // 13
x %= 5; // 3
x **= 3; // 27
```

---

## 2. Arithmetic Operators

Basic mathematical operations.

```js
let a = 5,
  b = 2;

a + b; // 7
a - b; // 3
a * b; // 10
a / b; // 2.5
a % b; // 1
a ** b; // 25
```

Increment / Decrement:

```js
let c = 10;
c++; // post increment
++c; // pre increment
```

---

## 3. Comparison Operators

Used to compare values — returns **true/false**.

```js
5 == "5"; // true (loose check)
5 === "5"; // false (strict check)
5 != "5"; // false
5 !== "5"; // true

10 > 5; // true
10 < 5; // false
10 >= 10; // true
5 <= 10; // true
```

---

## 4. Logical Operators

Used for conditions and short‑circuiting.

```js
true && false; // false
true || false; // true
!false; // true

null || "Hello"; // "Hello"
"Hi" && 0; // 0
```

---

## 5. Bitwise Operators

Operate on binary values.

```js
5 & 1; // 1
5 | 1; // 5
5 ^ 1; // 4
~5; // -6
5 << 1; // 10
5 >> 1; // 2
```

---

# 🎯 JavaScript Conditional (Ternary) Operator

## What is Ternary?

A **short form of if…else**, used for quick decisions.

```js
condition ? valueIfTrue : valueIfFalse;
```

---

## 1. Basic Example

```js
let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
```

---

## 2. Nested Ternary

```js
let score = 85;
let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 50 ? "C" : "Fail";
```

---

## 3. Ternary in console.log

```js
isLoggedIn ? console.log("Welcome!") : console.log("Please log in");
```

---

## 4. Ternary in assignments

```js
let price = 120;
let discount = price > 100 ? 20 : 5;
```

---

## 5. Ternary inside template literals

```js
let isMember = false;
let msg = `Discount: ${isMember ? "10%" : "0%"}`;
```

---

# 🔍 Truthy & Falsy with Ternary

JavaScript considers these as **falsy**:

```
0
""
null
undefined
false
NaN
```

Example:

```js
let name = "";
let displayName = name ? name : "Guest"; // "Guest"
```

Short version:

```js
console.log(name || "Guest");
```

---

# 🎓 Interview Examples

```js
0 ? "True" : "False"; // "False"

let x = 10;
let y = x > 5 ? x++ : --x;
// x becomes 11, y = 10

let a = null;
a ? "Has value" : "Empty"; // "Empty"
```

---

# ✅ Conclusion

By understanding all these operators and how JavaScript evaluates expressions, you gain:

- Strong problem‑solving ability
- Clean, predictable code
- Interview confidence
- Ability to handle any condition/logic in JS

Let me know if you want **Practice Problems**, **Interview Questions**, or a **Cheat Sheet PDF**!
