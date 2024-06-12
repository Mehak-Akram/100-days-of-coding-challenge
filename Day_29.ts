//Question 85: 
//Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.

let codePosition = (position : string): number => {
    return position.indexOf("code")
}


let res = codePosition("learn to code with Typescript")
console.log(res);

//Question 86: 
//Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.

let hasJavascript = (str : string): Boolean => {
    return str.includes("Javascript")
}

let result = hasJavascript("learn to code with Javascript")
console.log(result);

//Question 87: 
//Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.

function extractFirstTenChars(str: string): string {
    return str.substring(0, 10); // Gets characters from start to position 10
}

console.log(extractFirstTenChars("Hello,JavaScript world!"))