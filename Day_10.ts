//          ----Q28---


//Stages of Life: Write an if-else chain that determines a person’s stage of life.

//Set a value for the variable age, and then:

// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.


let age : number = 30;

if( age < 2){
   console.log("person is a baby");
}
else if(age >= 2 && age < 4){
   console.log("person is a toddler.");
}
else if(age >= 4 && age < 13){
   console.log("person is a kid.");
}
else if(age >= 13 && age < 20){
   console.log("person is a teenager.");
}
else if(age >= 20 && age < 65){
   console.log("person is a adult.");
}
else{
   console.log("person is an elder." )
}

//        ---Q9---

// Favorite Fruit: Make a array of your favorite fruits,
// and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!

let favorite_fruit: string[] = ["banana", "mango", "strawberry"]

//Using 5 Independent statements.

if(favorite_fruit.includes("banana")){
    console.log("You really like bananas!"); 
}

if(favorite_fruit.includes("mango")){
    console.log("You really like mango!"); 
}


if(favorite_fruit.includes("strawberry")){
    console.log("You really like strawberry"); 
}

if(favorite_fruit.includes("apple")){
    console.log("You really like apple!"); 
}

if(favorite_fruit.includes("orange")){
    console.log("You really like orange!"); 
}

//          ---Q30---

// Hello Admin: Make a array of five or more usernames, including the name 'admin'.
// Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let users : string[] = ["admin", "eric", "muntaha", "misbha", "falza"]

for(let user of users){
    if(user === "admin"){
        console.log("Hello admin, would you like to see a status report?")
    } else {
        console.log(`Hello ${user}, thank you for logging in again.`);
        
    }
}