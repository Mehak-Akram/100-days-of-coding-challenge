//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as,
 //“Hello Eric, would you like to learn some Python today?”

 let personName: string = "mehak";

 console.log(`Hello ${personName} , would you like to learn some Python today`);

 
//Q3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let person_Name: string = "mehak";
let lowercase: string =person_Name .toLowerCase();
let uppercase: string =person_Name .toUpperCase();
let titlecase: string =person_Name .charAt(0).toUpperCase() + personName.slice(1).toLowerCase();
console.log(lowercase);
console.log(uppercase);
console.log(titlecase);
