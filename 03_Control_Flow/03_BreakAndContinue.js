// ==============================================
// 1. BREAK Statement
// ==============================================
// Used to EXIT the loop completely
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Break at:", i);
    break; // stops the entire loop
  }
  console.log("Number:", i);
}

// Output:
// Number: 1
// Number: 2
// Number: 3
// Number: 4
// Break at: 5

// ==============================================
// 2. CONTINUE Statement
// ==============================================
// Skips the current iteration, continues with next
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Skip number:", i);
    continue; // skips printing 5
  }
  console.log("Number:", i);
}

// Output:
// Number: 1
// Number: 2
// Number: 3
// Number: 4
// Skip number: 5
// Number: 6
// Number: 7
// Number: 8
// Number: 9
// Number: 10

// ==============================================
// 3. BREAK inside WHILE Loop
// ==============================================
let x = 1;

while (x <= 10) {
  if (x === 4) {
    console.log("Break at:", x);
    break;
  }
  console.log("x:", x);
  x++;
}

// ==============================================
// 4. CONTINUE inside WHILE Loop
// ==============================================
let y = 0;

while (y < 6) {
  y++; // increment first to avoid infinite loop

  if (y === 3) {
    console.log("Skipping:", y);
    continue; // skips printing 3
  }

  console.log("y:", y);
}

// ==============================================
// 5. CONTINUE with FOR...OF (skipping values)
// ==============================================
const nums = [1, 2, 3, 4, 5];

for (let n of nums) {
  if (n % 2 === 0) continue;
  console.log("Odd number:", n);
}

// Output: 1, 3, 5
