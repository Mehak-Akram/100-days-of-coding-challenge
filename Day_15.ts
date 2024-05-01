//       ---Q43

//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
///and one array with the Great added to each magician’s name. 
//Because the original array will be unchanged, return the new array and store it in a separate array. 
//Call show_magicians() with each array to show that you have one array of the original names 

let magician: string[] = ["Alice", "David", "Chris"];

function copy_array(arr : string[]){
    return [...arr]
}

function make_great(magicianArray:string[]) {
    for(let i =0; i < magicianArray.length; i++){
      magician[i] =  "The Great "  +  magicianArray[i]
    }
}
function show_magicians(params:string[]) {
    for(let magicians of magician){
        console.log(magicians)
    }
}

let magicianArraycopy = copy_array(magician)
make_great(magicianArraycopy)

console.log("\n\nThis is my orignal array");

show_magicians(magician)

console.log("\n\nThis is my modified copy of the array")
show_magicians(magicianArraycopy)

//          ---Q44

//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides, 
//and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function make_sanwichies(item:string[]) {
    console.log("Making your sanwiches with:")
    for(let items of item){
      console.log("- " + items)
    }
    console.log("enjoy your sanwich\n")
}

make_sanwichies(["cheese", "chicken",])
make_sanwichies(["jelly", "peanut butter", "Tomato"])
make_sanwichies(["mayo", "egg", "avocado"])

//             ---Q45
//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. 
//It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, 
//such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly

function creat_car(manufacturer : string, model : string, ...optional : {[key : string]: any}[]) : object{
    let car = {
        manufacturer : manufacturer, 
        model : model,
        ...Object.assign({}, ...optional)
    }
    return car;
};

let carInfo = creat_car("Honda","Civic", {color : "white"}, {features : ["Navigation", "powerwindow"]})
console.log(carInfo);