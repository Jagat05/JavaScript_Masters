# JavaScript Variable Notes

This project contains simple and clear examples explaining **var**, **let**, **const**, scope, hoisting, and good practices in JavaScript.  
The purpose is to help you quickly recall core concepts and revise them anytime.

---

## 📌 Topics Covered

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

---
