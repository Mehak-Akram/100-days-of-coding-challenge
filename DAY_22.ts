//Question 64: 
//Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".

let combineStrNum = (text : string, number : number): string => {
    return text + number;
};

let reasult1 = combineStrNum("year :", 2024)
console.log(reasult1);


//Question 65: 
//Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them using the % sign.

let reminder = (num1 : number, num2 : number): number =>{
    return num1 % num2
}

let reasult2 = reminder(2, 3)
console.log(reasult2);

//Question 66: 
//Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator.

let logic = (val1 : boolean, val2 : boolean): boolean => {
    return val1 && val2
}

let reasult3 = logic(false, true)
console.log(reasult3);



