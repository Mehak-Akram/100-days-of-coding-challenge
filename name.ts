//Q3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string = "mehak";
let lowercase: string =personName .toLowerCase();
let uppercase: string =personName .toUpperCase();
let titlecase: string =personName .charAt(0).toUpperCase() + personName.slice(1).toLowerCase();
console.log(lowercase);
console.log(uppercase);
console.log(titlecase);
