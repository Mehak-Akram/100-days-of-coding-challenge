//Question 79:
//Creating and Accessing Object Properties: Construct an object representing a car with properties for make, model, and year.
//Then, show how you can access the model property of the car.

let car: { make: string; model: string; year: number } = {
  make: "Toyota",
  model: "Corola",
  year: 2023,
};

console.log(car.model);

//Question 80:
//Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.

let car2: { make: string; model: string; year: number; color: string } = {
  make: "Toyota",
  model: "Corola",
  year: 2023,
  color: "white",
};

(car2.color = "blue"), (car2.year = 2024);
console.log(car2);

//Question 81:
//Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.

let studentInfo = (obj: object) => {
  for (let i in obj) {
    console.log(`i : ${obj[i]}`);
  }
};

studentInfo({ name: "sara", age: 20, marks: 90, subject: "computer science" });
