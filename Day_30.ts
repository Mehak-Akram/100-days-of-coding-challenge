//Question 88: 
//Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.

function roundInteger(num : number): number {
    return Math.round(num)
}

let result = roundInteger(2.9)
console.log(result);

//Question 89: 
//Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.

function convertNum(str : string){
    return parseFloat(str)
}

let res = convertNum("123")
console.log(res);
res = convertNum("5.6")
console.log(res);

//Question 90: 
//Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.

function getNaN(value : any):boolean{
    return isNaN(value)
}

let res2 = getNaN("TypeScript")
console.log(res2);//output =>  true

res2 = getNaN(45)
console.log(res2);//output =>  false

