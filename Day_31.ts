//Question 91: 
//Create an array of your three favorite fruits and add a new fruit to the end of the array.

let favoriteFruits : string[] = ["stawberry", "apple", "banana"]

favoriteFruits.push("mango")

console.log(favoriteFruits);

//Question 92: 
//Write a function to remove the last element from an array and return the removed element.

function removeLastElements(flower : string[]){
    return flower.pop()
}

const res = removeLastElements(["Lily", "Jasmine", "Sunflower", "Rose"])
console.log(res);//output => Rose

//Question 92:
// Write a function to remove the last element from an array and return the removed element.

function replaceElement(fruits : string[] ){
    let replace = fruits.indexOf("Banana")
    if( replace !== -1) fruits[replace] = "Mango"
    
}
const fruits : string[] = ["Apple", "Banana", "Watermelon"]
replaceElement(fruits)
console.log(fruits);



