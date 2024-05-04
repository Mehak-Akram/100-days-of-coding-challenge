//Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. 
//Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.

interface specsType  {
        storage: string,
        screenSize: string,
        batteryLife: string
    }

type smartphoneType = {
    make: string,
    model: string,
    specs: specsType
}

let smartphone: smartphoneType = {
    make: "Samsung",
    model: "Galaxy S21",
    specs: {
        storage: "128GB",
        screenSize: "6.2 inches",
        batteryLife: "18 hours"
    }
};

console.log(smartphone)
// Question 53:
// Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, 
// like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.

let developerSkills = {
    languages: ["JavaScript", "TypeScript", "Python"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"]
};

let { languages, frameworks, tools } = developerSkills;

console.log(`Language: ${languages[0]}, Framework: ${frameworks[0]}, Tool: ${tools[0]}`);

//          ---Question 54:
// Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, 
//like adjusting labels based on user choices.

function createObjectWithDynamicKey(key: string, value: string) {
    let dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}

let userPreference = createObjectWithDynamicKey("theme", "dark");

console.log(userPreference);