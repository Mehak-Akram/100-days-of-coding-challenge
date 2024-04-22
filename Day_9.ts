//   Q25

//Alien Colors #1:


//Create a variable called alien_color

let alien_color: string = "green";

//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

if(alien_color === "green"){
    console.log("alien color is green player just earned 5 points");
}

//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

if(alien_color === "yellow"){
    console.log("alien color is yellow");
}

//   Q26

// Alien Colors #2: 
let alienColors : string  = "green";

if(alienColors === "green"){
   console.log("Player just earned 5 points for shotings the alien.");
}else{
    console.log("player just earned 10 point. ");
}

//second version

if(alienColors === "blue"){
    console.log("Player just earned 5 points for shotings the alien.");
}else{
    console.log("player just earned 10 point. ");
}

//    Q27

//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.


let alienColor: string = "green"

//• If the alien is green, print a message that the player earned 5 points.
//version 1
if(alienColor == "green"){
    console.log("player earned 5 points.")
}else if(alienColor == "yellow"){
    console.log("player earned 10 points.")
}else if(alienColor == "red"){
    console.log("player earned 15 points.")
}else{
    console.log("please select right color:")
}

//• If the alien is yellow, print a message that the player earned 10 points.
//version 2

alienColor = "yellow";

if(alienColor == "green"){
    console.log("player earned 5 points.")
}else if(alienColor == "yellow"){
    console.log("player earned 10 points.")
}else if(alienColor == "red"){
    console.log("player earned 15 points.")
}else{
    console.log("please select right color:")
}

//• If the alien is red, print a message that the player earned 15 points.
//version 3

alienColor = "red";

if(alienColor == "green"){
    console.log("player earned 5 points.")
}else if(alienColor == "yellow"){
    console.log("player earned 10 points.")
}else if(alienColor == "red"){
    console.log("player earned 15 points.")
}else{
    console.log("please select right color:")
}