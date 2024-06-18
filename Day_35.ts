//Question 103: 
//Write a function that returns a random boolean value, true or false.


let booleanValue = () : boolean => {
    return Math.random() > 0.7
}

let result = booleanValue()
console.log(result);

//Question 104:
// Create a function that generates a random hexadecimal color code.

function getRandomHexColor(): string {
    const color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return color; // Returns the random color code
}
console.log(getRandomHexColor());

//Question 105: 
//Simulate a dice roll using JavaScript and return a random integer between 1 and 6.

function rollDice(): number {
    return Math.floor(Math.random() * 6) + 1; // Calculates a random integer from 1 to 6
}

let res = rollDice()
console.log(res);
