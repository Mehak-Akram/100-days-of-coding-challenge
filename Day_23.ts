//Question 67: 
//Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number. 

function arithmetic(num : number, numStr : string): number{
    return num + Number(numStr)
}

let result1 = arithmetic(15, "20")
console.log(result1);//output 35

//Question 68: 
//Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.


function multiplyRound(a: number, b: number): number {
    const product = a * b;
    return Math.round(product * 100) / 100
}

const result2 = multiplyRound(14.345, 9.789);
console.log(result2);

//Question 69: 
//Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.

function reminders(num1 : number, num2 : number):{quotient : number, remainder : number}{
    let quotient = Math.floor(num1 / num2);
    let remainder = num1 % num2;
    return {quotient,remainder}
}

let result3 = reminders(19,5)
console.log(result3);
