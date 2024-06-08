//Question 73: 
//Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. 
//Then, update its value within the same function and log both the initial and updated values.

let updateVariable = () => {
    let year = 2023
    console.log("Initial value:", year);

    year = 2024
    console.log("Updated value:", year);
}

updateVariable()

//Question 74: 
//Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.

function swap(){
    let a = 2 
    let b = 3
    console.log(`Before swap: a = ${a = a}, b = ${b = b}`);
    let temp = a
    a = b
    b = temp
    console.log(`After swap: a = ${a = a}, b = ${b = b}`);
}

swap()

//Question 75: 
//Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations
// (addition, subtraction, multiplication, division) on x using compound operators.

function useCompoundOperators() {
    let x = 4; // Starts with x equal to 4
    console.log("Initial x:", x);

    x += 2; // Adds 2 to x
    console.log("After addition:", x); // Shows x after addition

    x -= 1; // Subtracts 1 from x
    console.log("After subtraction:", x); // Shows x after subtraction

    x *= 3; // Multiplies x by 3
    console.log("After multiplication:", x); // Shows x after multiplication

    x /= 2; // Divides x by 2
    console.log("After division:", x); // Shows x after division
}

useCompoundOperators();