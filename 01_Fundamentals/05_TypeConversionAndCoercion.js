// ==============================
// Type Conversion & Type Coercion in JavaScript
// ==============================

// ---------------------------------
// 1. Explicit Type Conversion (Manual)
// ---------------------------------

// Convert to Number
console.log(Number("10"));      // 10
console.log(Number("10abc"));   // NaN
console.log(Number(true));       // 1
console.log(Number(false));      // 0

// Shortcut using unary +
console.log(+"20");             // 20

// Convert to String
console.log(String(100));        // "100"
console.log((100).toString());   // "100"

// Convert to Boolean
console.log(Boolean(1));         // true
console.log(Boolean(0));         // false
console.log(Boolean("hi"));     // true
console.log(Boolean(""));       // false

// ---------------------------------
// 2. Implicit Type Coercion (Automatic)
// ---------------------------------

// + operator: String wins
console.log(1 + "2");            // "12"
console.log("hello" + 5);        // "hello5"

// -, *, / convert to Number
console.log("10" - 5);           // 5
console.log("6" * "2");          // 12
console.log("10" / 2);           // 5

// Boolean to Number
console.log(true + 1);           // 2 (true → 1)
console.log(false + 1);          // 1 (false → 0)

// null & undefined
console.log(null + 5);           // 5 (null → 0)
console.log(undefined + 5);      // NaN (undefined → NaN)

// ---------------------------------
// 3. == (Loose Equality) Coercion
// ---------------------------------

console.log("5" == 5);           // true
console.log(0 == false);          // true
console.log(null == undefined);   // true

// ---------------------------------
// 4. === Strict Equality (No Coercion)
// ---------------------------------
console.log("5" === 5);          // false
console.log(0 === false);         // false

// ---------------------------------
// 5. Famous Interview Traps
// ---------------------------------

// [] converts to "" then 0
console.log([] == 0);             // true

// Arrays compare by reference
console.log([] == []);            // false

// " " becomes empty string → 0
console.log(" " == 0);           // true

// null only equals undefined
console.log(null == 0);           // false

// -------------------------------
// BONUS: How JavaScript converts values internally
// -------------------------------

console.log(Number(""));         // 0
console.log(Number(" "));        // 0
console.log(Number([]));          // 0
console.log(Number([1]));         // 1
console.log(Number([1,2]));       // NaN
console.log(Number({}));          // NaN
