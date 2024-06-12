//Question 94: 
//Use the .map() method to create a new array that contains the length of each word from an array of words.

let words : string [] = ["TypeScript", "GitHub", "npm", "JavaScript"]

const wordsLength = words.map(val => val.length)
console.log(wordsLength);

//Question 95: 
//Write a function that uses the .filter() method to return an array of numbers greater than 10.

function filterNum(num : number[]):number[] {
    return num.filter(val => val > 10)
}

let result = filterNum([5, 70, 20, 10])
console.log(result);

//Question 96:
//Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

function calculateSum(numbers: number[]): number {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

const numbers: number[] = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers));