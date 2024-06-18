//Question 100: 
//Use the JavaScript Math object to find the square root of 144.

const sqaueRoot : number = Math.sqrt(144)

console.log(sqaueRoot);//output => 12

//Question 101:
// Generate a random integer between 1 and 10.

let findInteger = ():number => {
    return Math.floor(Math.random()*10)+1;
}

let res = findInteger()
console.log(res);

//Question 102:
// Calculate and log the absolute difference between the number -5 and 5.

let diff: number = Math.abs(-2 - 2);

console.log(diff);