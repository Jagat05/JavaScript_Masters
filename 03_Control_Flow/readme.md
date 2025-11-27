# 📘 JavaScript Notes – Conditions, Loops & Control Flow

This document contains all important JavaScript concepts including **IF statements**, **Switch**, **Ternary**, **Truthy/Falsy**, **Loops**, and **Break/Continue** with examples.

---

## ✅ 1. IF Statement

Used to run code only when a condition is true.

```js
let age = 18;

if (age >= 18) {
  console.log("You are an adult");
}
```

---

## ✅ 2. IF...ELSE Statement

Runs one block if true, another if false.

```js
let age2 = 16;

if (age2 >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}
```

---

## ✅ 3. IF...ELSE IF...ELSE

Checks multiple conditions in order.

```js
let score = 85;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else if (score >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}
```

---

## ✅ 4. Nested IF

IF inside another IF.

```js
let personAge = 20;
let hasID = true;

if (personAge >= 18) {
  if (hasID) {
    console.log("Entry allowed");
  } else {
    console.log("You must show an ID");
  }
} else {
  console.log("Entry denied");
}
```

---

## ✅ 5. SWITCH Statement

```js
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  default:
    console.log("Another day");
}
```

---

## ✅ 6. Grouped CASES in Switch

```js
let color = "red";

switch (color) {
  case "red":
  case "pink":
    console.log("Warm color");
    break;

  case "blue":
  case "green":
    console.log("Cool color");
    break;

  default:
    console.log("Unknown color");
}
```

---

## ✅ 7. Ternary Operator

```js
let age3 = 17;
let canVote = age3 >= 18 ? "Yes, can vote" : "No, cannot vote";

console.log(canVote);
```

---

## ✅ 8. Truthy & Falsy Values

### ❌ Falsy Values

- 0
- ""
- null
- undefined
- false
- NaN
- 0n

### ✔ Truthy Values

Everything else.

```js
if (0) {
  console.log("This will NOT run");
}

if ("hello") {
  console.log("This WILL run");
}
```

---

# 🔁 Loops in JavaScript

## ✅ 1. FOR Loop

```js
for (let i = 1; i <= 5; i++) {
  console.log("For Loop Number:", i);
}
```

---

## ✅ 2. WHILE Loop

```js
let count = 1;

while (count <= 5) {
  console.log("While Loop Count:", count);
  count++;
}
```

---

## ✅ 3. DO...WHILE Loop

```js
let x = 10;

do {
  console.log("Do-While executed at least once");
  x++;
} while (x < 5);
```

---

## ✅ 4. FOR...IN Loop (Objects)

```js
const user = {
  name: "Rahul",
  age: 22,
  city: "Delhi",
};

for (let key in user) {
  console.log("Key:", key, "| Value:", user[key]);
}
```

---

## ✅ 5. FOR...OF Loop (Arrays & Strings)

```js
const numbers = [10, 20, 30];

for (let num of numbers) {
  console.log("Number:", num);
}

for (let char of "ABC") {
  console.log("Character:", char);
}
```

---

# 🚦 Break & Continue

## ✅ 1. BREAK

```js
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Break at:", i);
    break;
  }
  console.log("Number:", i);
}
```

---

## ✅ 2. CONTINUE

```js
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Skip number:", i);
    continue;
  }
  console.log("Number:", i);
}
```

---

## ✅ 3. BREAK in WHILE Loop

```js
let x2 = 1;

while (x2 <= 10) {
  if (x2 === 4) {
    console.log("Break at:", x2);
    break;
  }
  console.log("x:", x2);
  x2++;
}
```

---

## ✅ 4. CONTINUE in WHILE Loop

```js
let y = 0;

while (y < 6) {
  y++;

  if (y === 3) {
    console.log("Skipping:", y);
    continue;
  }

  console.log("y:", y);
}
```

---

## ✅ 5. CONTINUE in FOR...OF

```js
const nums = [1, 2, 3, 4, 5];

for (let n of nums) {
  if (n % 2 === 0) continue;
  console.log("Odd number:", n);
}
```

---
