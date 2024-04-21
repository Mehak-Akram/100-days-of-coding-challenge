            //Q 22


//Intentional Error:

let newArray: string[] = ["Mehak", "Muntaha", "Falza"]

console.log(newArray[5]);

//Correct the Error.

console.log(newArray);

                //Q 23

//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// //Creating  variable.
let five: number = 5;

let six: number = 6;

//Test 1
console.log("Test 1:five is equal to 5")
console.log(five == 5)//true

//Test 2
console.log("\n Test 2: ten is equal to 10")
console.log(six == 6)//true


//Test 3
console.log("\n Test 3: five is equal to 10")
console.log(five != 6)//true


//Test 4
console.log("\n Test 4: ten is greater than 5")
console.log(six > 5)//true

//Test 5
console.log("\n Test 5: five is lesss than 10")
console.log(five < 6)//true

//Test 6
console.log("\n Test 6: ten is less than 5")
console.log(six < 5)//false


//Test 7
console.log("\n Test 7:five is not equal to 5")
console.log(five != 5)//false

//Test 8
console.log("\n Test 8: ten is not equal to 10")
console.log(six != 6)//false

//Test 9
console.log("\n Test 4: five is greater than 10")
console.log(five > 6)//false

//Test 10

console.log("\n Test 10: ten is equal to five")
console.log(six == five)//false

            //Q 24

//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. 
//Have at least one True and one False result for each of the following:

//DEFINE VARIABLE

let apple: string = "apple";
let upperCase: string = "APPLE";
let ten: number = 10;
let twenty: number = 20;

let fruits: string[] = ["banana", "apple","orange"];

//• Tests for equality and inequality with strings


console.log("Is apple is equal to apple?")
console.log(apple == "apple");//true

console.log("\n Is apple is not equal to apple?")
console.log(apple != "apple");//false

// • Tests using the lower case function
console.log("\n Is APPLE is equal to apple after converting to lower case")
console.log(upperCase.toLocaleLowerCase() == "apple" );//true

console.log("\n Is APPLE is not equal to apple after converting to lower case")
console.log(upperCase.toLocaleLowerCase() != "apple" );//false

// • Numerical tests involving equality and inequality,greater than and less than, greater than or equal to, and less than or equal to

console.log("\n Is ten is equal to twenty")
console.log(ten == twenty);//false

console.log("\n Is ten is not equal to twenty")
console.log(ten != twenty);//true

console.log("\n Is ten is greater than 0")
console.log(ten > 0);//true

console.log("\n Is twenty is less than 10")
console.log(twenty < 10)//false

console.log("\n Is ten is greater than or is equal to 5?")
console.log(ten >= 5);//true

console.log("\n Is ten is less than or equal to twenty")
console.log(twenty <= ten);//false

// • Tests using "and" and "or" operators

//using && (AND)
console.log("\n IS twenty is not equal to 10 and twenty is greater than 10")
console.log(twenty != 10 && twenty > 10);//true

console.log("\n IS twenty is  equal to 10 and twenty is greater than 10")
console.log(twenty == 10 && twenty > 10)//false

//using || (OR)

console.log("\n IS twenty is  equal to 10 or twenty is greater than 10")
console.log(twenty == 10 || twenty > 10);//true


console.log("\n IS twenty is  equal to 30 and twenty is less than 10")
console.log(twenty == 30 || twenty < 10)//false

// • Test whether an item is in a array

// • Test whether an item is not in a array
console.log("\n Is orange includes in fruits array?")
console.log(fruits.includes("orange"));//true

// • Test whether an item is not in a array

console.log("\n Is mango includes in fruits array?")
console.log(fruits.includes("mango"))//false



