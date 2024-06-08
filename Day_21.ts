//Question 61:
// Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example

enum VehicleType {
    Car,
    train,
    Motorcycle,
}

console.log(VehicleType.Car);

//Question 62: 
//Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking,
// and then fill in this blueprint with an example student.

interface Student {
    name: string;
    age: number;
    courses: string[];
}

// Filling in the blueprint with an example student
let student: Student = {
    name: "Ali",
    age: 22,
    courses: ["english", "Science", "chemistry"]
};

// Showing the student's information
console.log(student);

