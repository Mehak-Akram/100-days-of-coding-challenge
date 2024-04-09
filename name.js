//Q3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "mehak";
var lowercase = personName.toLowerCase();
var uppercase = personName.toUpperCase();
var titlecase = personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase();
console.log(lowercase);
console.log(uppercase);
console.log(titlecase);
