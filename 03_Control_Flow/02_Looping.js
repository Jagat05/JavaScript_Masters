// ==============================================
// 1. FOR LOOP
// ==============================================
// Use when you know how many times to loop
for (let i = 1; i <= 5; i++) {
  console.log("For Loop Number:", i);
}

// ==============================================
// 2. WHILE LOOP
// ==============================================
// Runs as long as condition is true
let count = 1;

while (count <= 5) {
  console.log("While Loop Count:", count);
  count++; // important or infinite loop
}

// ==============================================
// 3. DO...WHILE LOOP
// ==============================================
// Executes at least once even if condition is false
let x = 10;

do {
  console.log("Do-While executed at least once");
  x++;
} while (x < 5);

// ==============================================
// 4. FOR...IN LOOP  (Used for OBJECTS)
// ==============================================
// Loops over object KEYS
const user = {
  name: "Rahul",
  age: 22,
  city: "Delhi",
};

for (let key in user) {
  console.log("Key:", key, "| Value:", user[key]);
}

// ==============================================
// 5. FOR...OF LOOP  (Used for ARRAYS, STRINGS)
// ==============================================
// Loops over VALUES
const numbers = [10, 20, 30];

for (let num of numbers) {
  console.log("Number:", num);
}

// for...of with string
for (let char of "ABC") {
  console.log("Character:", char);
}
