// ==============================================
// 1. IF statement
// ==============================================
let age = 18;

if (age >= 18) {
  console.log("You are an adult");
}

// ==============================================
// 2. IF...ELSE statement
// ==============================================
let age2 = 16;

if (age2 >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

// ==============================================
// 3. IF...ELSE IF...ELSE statement
// ==============================================
let score = 85;

if (score >= 90) {
  console``.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else if (score >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

// ==============================================
// 4. Nested IF statements
// ==============================================
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

// ==============================================
// 5. SWITCH statement
// ==============================================
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

// ==============================================
// 6. Grouped CASES in SWITCH
// ==============================================
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

// ==============================================
// 7. TERNARY operator (short if-else)
// ==============================================
let age3 = 17;
let canVote = age3 >= 18 ? "Yes, can vote" : "No, cannot vote";

console.log(canVote); // "No, cannot vote"

// ==============================================
// 8. Truthy / Falsy in IF
//Falsy Value:-0(zero),""(empty string),null(nothing),undefined(not defined),false(boolean false),NaN(Not a number),On(BigInt zero)
// Truthy Value:- "hello" (non-empty string), 1(positive number), -1(negative number), [] (empty array),{}(empty object),"0"(string zero) "false"  (string false)....everything except Falsy value
//==============================================
if (0) {
  console.log("This will NOT run");
}
if ("hello") {
  console.log("This WILL run");
}

// ==============================================
// Falsy Values: 0, "", null, undefined, false, NaN
// Everything else is truthy
// ==============================================
