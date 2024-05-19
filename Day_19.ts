// Question 55:
// Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.

const originalNumbers: number[] = [6, 7, 8, 9, 10];

const doubledNumbers: number[] = originalNumbers.map(num => num * 2);

console.log("Original numbers:", originalNumbers);
console.log("Doubled numbers:", doubledNumbers);

//Question 56:
// Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

let mixedArray = [8, "patato", true, "mango", 7, "apple"];

let onlyString = mixedArray.filter(item => typeof item === "string");

console.log(onlyString);

//Question 57:
// Find the Average Grade: Given a list of grades, calculate the average grade.

let grades = [96, 94, 67, 79, 55, 49];

let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;

console.log(averageGrade);

