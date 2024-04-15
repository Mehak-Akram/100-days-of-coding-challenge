//---    Q13     ---
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
//and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transportation = ["motorcycle", "Car", "Bus", "Train"];
for (var i = 0; i < transportation.length; i++) {
    console.log("i would like to own a " + transportation[i]);
}
//---     Q14      ---
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var Guest_List = ["samia", "Aisha", "Hadia"];
for (var i = 0; i < Guest_List.length; i++) {
    console.log("Dear " + Guest_List[i] + ",\n\n it is our pleasure to invite you our party.\n\n Thankyou");
}
//---    Q15    ---
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
var guestlist = ["samia", "Aisha", "Hadia"];
for (var i = 0; i < guestlist.length; i++) {
    console.log("Dear " + guestlist[i] + ",\n\n it is our pleasure to invite you our party.\n\n Thankyou!\n\n");
}
var absentguest = "samia";
var newguest = "Zainab";
guestlist[0] = newguest;
for (var i = 0; i < guestlist.length; i++) {
    console.log("Dear " + guestlist[i] + ",\n\n it is our pleasure to invite you our party.\n\n Thankyou!\n\n");
}
console.log("".concat(absentguest, " is not coming."));
