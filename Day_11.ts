//          ---Q31---

// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let users : string[] = ["admin", "eric","muntaha", "mehak", "falza"];

users = []
if(users.length === 0){
    console.log("Your Array is empty We need to find some users!");
}else{
    for(let user of users){
        if(user === "admin"){
            console.log("Hello admin, would you like to see a status report?")
        } else {
            console.log(`Hello ${user}, thank you for logging in again.`);
            
        }
    }
}

//        ---Q32---

// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. 
//If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users: string[] = ["Fatima", "falza", "Muntaha", "aishA", "Mehak"];

let new_users: string[] = ["Areeba", "Falza", "Aisha", "Muskan", "Samia" ]

new_users.forEach(newUserName => {
    let lowerCase : string = newUserName.toLowerCase();
    if(current_users.map(c_users => c_users.toLowerCase()).includes(lowerCase)){
        console.log(`the username ${newUserName} is not available,please enter a diffrent username`);
    }else{
        console.log(`The username ${newUserName} is available`);
    }
})

//          ---Q33---

// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

// • Store the numbers 1 through 9 in a array.

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// • Loop through the array.

for(let ordNumber of numbers){
    let ordinalEnding : string;
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number.
    if(ordNumber === 1){
         ordinalEnding = "st"
    }
    else if(ordNumber === 2){
       ordinalEnding = "nd"
    }
    else if(ordNumber === 3){
        ordinalEnding = "rd"
    }
    else{
        ordinalEnding = "th"
    }
    console.log(`${ordNumber}${ordinalEnding}`)
}
