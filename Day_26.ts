//Question 76: 
//Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together, and returns the result. 
//Show how you can call this function and log the result.

let addNumber = (num1 : number, num2 : number):number => {
    return num1 + num2
}

let result = addNumber(10 , 10)
console.log(result);

//Question 77: 
//Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.

let defaulFunction = (name : string = "anonymous" ) => {
    return `Hello ${name}`
}

let getUser1 = defaulFunction("Sara")
let getUser2 = defaulFunction()
 console.log(getUser1);
 console.log(getUser2);
 
//Question 78: 
//Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.

function squareDeclaration(num1 : number, num2 : number):number{
    return num1 * num2
}

let squareExpression = function(num1 : number, num2 : number):number{
    return num1 * num2
}

let res1 = squareDeclaration(6, 6)
let res2 = squareExpression(6, 6)
console.log(res1);
console.log(res2);
