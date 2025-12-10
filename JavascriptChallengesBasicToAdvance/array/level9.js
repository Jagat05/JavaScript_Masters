const arr = [5, 1, 2, 4];

//Q1. use map to multiply each item by 3 if even and remove the odds ones

const output = arr
  .map((item) => {
    if (item % 2 == 0) return item * 3;
  })
  .filter((item) => item);

console.log(output);

// Q2 use foreach to calculate the sum of all even numbers in the array
let sum = 0;
arr.forEach((item) => {
  sum = sum + item;
});
console.log(sum);

const arr1 = ["ram", 90, 70, 50];
const arr2 = ["shyam", 99, 88, 35];

// Q1. create an array which contains names of students only

// hint use typeof operator
const names = arr1.concat(arr2).filter((item) => {
  // yedi item to typeof 'string' ho vaney matra return garne
  if (typeof item === "string") {
    return item;
  }
});
console.log(names);

// Q2. calculate the total score of ram and shyam

let sum2 = 0;
// const marks = [...arr, ...arr2];
// marks.forEach((item) => {
[...arr, ...arr2].forEach((item) => {
  // yedi item typeof 'number' ho vaney sum ma add garne
  if (typeof item === "number") {
    sum2 = sum2 + item;
  }
});
console.log(sum2);
