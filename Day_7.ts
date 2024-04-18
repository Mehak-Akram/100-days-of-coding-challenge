            //---   Q19     ---

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
            
            // console.log(`${absentguest} is not coming.`);
            // console.log("Good news we find big table so we invited 3 more guest");
            
            Guest_List.unshift("Misbha")
            Guest_List.splice(2 , 0 , "Falza" );
            Guest_List.push("Muntaha");
            
            // for(let i=0; i< Guest_List.length; i++){
            
            //     console.log("Dear "+ Guest_List[i] +  ",\n\n it is our pleasure to invite you our party.\n\n Thankyou!\n\n" )    
            // }
            
            // console.log("\nSorry we cannot arrange big table,only two people will be invited ");
            
            while(Guest_List.length > 2){
                let remove_Guest = Guest_List.pop();
                // console.log(`Sorry ${remove_Guest}, you are not invited for dinner.`);
            }
            
            
            
            // for(let i=0; i< Guest_List.length; i++){
            
            //     console.log("Dear "+ Guest_List[i] +  ",\n\n you are still invited.\n\n Thankyou!\n\n" )    
            // }
            
            Guest_List.splice(0 , 2);
            console.log(Guest_List);
            
            
            
            //Print a meesage indicating a number for people you invited to dinner.
            console.log(`Totle number of a Guest Are: ${Guest_List.length}`);



            //---   Q20     ---

//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages,
// or anything else you’d like. Write a program that creates a list containing these items.


//Think of somthing you could store in a Array.

let places: string[] = ["Lahore", "karachi", "Islamabad", "peshawar", "Multan"];
console.log("list of cities");

//Write a program that creates a list containing these items.
 for(let list of places){
    console.log(list);
 }

            //---   Q21 ---

//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.



//Data types of person object
interface person{
    name: string,
    nationality: string,
    age: number,
    isStudent: Boolean,
}

//peron object

let person :person = {
    name: "Mehak",
    nationality: "Pakistan",
    age: 18,
    isStudent: true,
}

console.log(person);