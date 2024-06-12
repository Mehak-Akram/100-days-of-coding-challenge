//Question 82: 
//Find the Length of a String: Write a function that takes a string as an argument and returns the number of characters in the string.

let gerPersonName = (name : string): number => {
    return name.length
}

let res = gerPersonName("Zainab")
console.log(res);

//Question 83: 
//Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.

function convertCase(sentence: string) {
    let upperStr = sentence.toUpperCase(); 
    let lowerStr = sentence.toLowerCase(); 

    console.log("Uppercase:", upperStr, "Lowercase:", lowerStr);
}

convertCase("Hello World");

//Question 84: 
//Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".

let replaceSen = (sentence : string) => {
    return sentence.replace(sentence, "I like Typescript")
}

let result = replaceSen(" I am learning javascript")
console.log(result);//output => I like typescript
