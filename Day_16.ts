//              ---Question 46
//Q : Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.


function describe_laptop(make : string, model : string, year : number){
    let laptop = {
        make : make, 
        model : model, 
        year : year,
    }
    console.log(`This laptop is ${laptop.make} ${laptop.model} ${laptop.year}`)
}

describe_laptop("Dell", "XPS 15", 2021);

//         ---Question 47: 
//Q :Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, 
//and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables

let laptops = [
    { make: "Dell", model: "XPS 15", year: 2021 },
    { make: "Apple", model: "MacBook Pro", year: 2020 },
    { make: "HP", model: "Spectre x360", year: 2021 }
];
let [laptop1, laptop2,] = laptops;
console.log(laptop1);
console.log(laptop2);

//          ---Question 48: 
//Q :Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. 
//Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result

let pricesSet1 = [1200, 1500, 1100];
let pricesSet2 = [1000, 1300, 1600];
let combinedPrices = [...pricesSet1, ...pricesSet2]
let reasult = combinedPrices.sort()
console.log(reasult)