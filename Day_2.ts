//Question_4

//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
// Your output should look something like the following, including the quotation marks:


console.log("Albert Einstein once said,A person who never made a mistake never tried anything new.");

//Question_5
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
// Then compose your message and store it in a new variable called message. Print your message

let famous_person: string = "Albert Einstein";

let message: string = " person who never made a mistake never tried anything new";

console.log(`${famous_person} once said, ${message}`); 

//Question_6

//Stripping Names:


const personName: string = "   \n\tMehak Naz\t\n   ";
console.log(personName);

const without_Whitespace : string = personName.trim();
console.log(without_Whitespace);