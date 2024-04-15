             //--- Q 16 ---

 //More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.

//• Print a new set of invitation messages, one for each person in your list.

let guestlist: string[] =["samia","Aisha","Hadia"];

for(let i=0; i<guestlist.length; i++){

     console.log("Dear "+ guestlist[i] +  ",\n\n it is our pleasure to invite you our party.\n\n Thankyou!\n\n" )
}

let absent_guest: string = "samia";

let new_guest: string = "Zainab";

guestlist[0]= new_guest;

for(let i=0; i<guestlist.length; i++){

    console.log("Dear "+ guestlist[i] +  ",\n\n it is our pleasure to invite you our party.\n\n Thankyou!\n\n" )
}

console.log(`${absent_guest} is not coming.`);

console.log("Good news we find big table so we invited 3 more guest");

guestlist.unshift("Misbha")
guestlist.splice(2 ,0, "Falza" );
guestlist.push("Muntaha");

for(let i=0; i<guestlist.length; i++){

    console.log("Dear "+ guestlist[i] +  ",\n\n it is our pleasure to invite you our party.\n\n Thankyou!\n\n" )
    
}

            //--- Q17 ---
    
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list,
// print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let Guest_List: string[] =["samia","Aisha","Hadia"];

// for(let i=0; i<guestlist.length; i++){

//      console.log("Dear "+ guestlist[i] +  ",\n\n it is our pleasure to invite you our party.\n\n Thankyou!\n\n" )
// }

let absentguest: string = "samia";

let newguest: string = "Zainab"
Guest_List[0]= newguest;

//  for(let i=0; i<Guest_List.length; i++){

//      console.log("Dear "+ Guest_List[i] +  ",\n\n it is our pleasure to invite you our party.\n\n Thankyou!\n\n" )
//  }

console.log(`${absentguest} is not coming.`);

console.log("Good news we find big table so we invited 3 more guest");

Guest_List.unshift("Misbha")
Guest_List.splice(2 , 0 , "Falza" );
Guest_List.push("Muntaha");

for(let i=0; i< Guest_List.length; i++){

    console.log("Dear "+ Guest_List[i] +  ",\n\n it is our pleasure to invite you our party.\n\n Thankyou!\n\n" )    
}

console.log("\nSorry we cannot arrange big table,only two people will be invited ");

while(Guest_List.length > 2){
    let remove_Guest = Guest_List.pop();
    console.log(`Sorry ${remove_Guest}, you are not invited for dinner.`);
}



for(let i=0; i< Guest_List.length; i++){

    console.log("Dear "+ Guest_List[i] +  ",\n\n you are still invited.\n\n Thankyou!\n\n" )    
}

Guest_List.splice(0 , 2);
console.log(Guest_List);

            //---Q18 ---

//Store the location in a Array,Make sure the Array is not in alphabetical order.

let places: string[] = ["Turkey", "Italy", "Japan", "Germany", "London" ]

//print your Array in its orignal Order
console.log("Orignal order ", places);

//print your Array in a alphabetical order without modifying the actual list.
console.log("alphabetical order", places.slice().sort());
 
// Show that your Array is still its orignal order by printing the actul list.
console.log("Orignal order after sorting ", places);


//print your Array in reverse alphabetical order without changing the orignal order of the orignal list.
console.log(" reverse alphabetical order", places.slice().sort().reverse());
 

//Show that your Array is still its orignal order by printing it again.
console.log("Orignal order after reverse sorting ", places);

//Reverse the order of your list.print the Array to show that its order has changed.
places.reverse();
console.log("Reverse order", places);

//Reserve the order of yor list again.print the list to show it's back to its orignal Order.
places.reverse();
console.log("Back to orignal order", places);

//sort your to it's stored in alphabetical order. print the array to show that its order has been changed.
console.log(" sorted in alphabetical order", places.slice().sort());

//sort to changed yur Array so it's stored in reverse alphabetical order.print the list to show that it's order has changed.
console.log("stored in reverse alphabetical order", places.slice().sort().reverse());




