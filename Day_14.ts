//          ---Q40---          

//Album: Write a function called make_album() that builds a Object describing a music album.
// Make at least one new function call that includes the number of tracks on an album. 
//The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. 
//Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. 
//Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, 
//add that value to the album’s Object.

function make_album(artist : string, title : string, tracks? : number){
    let album : {artist : string, title : string, tracks? : number} = {
        artist : artist,
        title : title,
    }
     if(tracks !== undefined ){
        album.tracks = tracks
     }
    return album
}
let album1 = make_album("Artist 1", "Album Title 1")
let album2 = make_album("Artist 2", "Album Title 2")
let album3 = make_album("Artist 3", "Album Title 3", 10)

console.log(album1);
console.log(album2);
console.log(album3);
//          ---Q41---

//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicians: string[] = ["Alice", "David", "Chris"];

function show_magician(params:string[]) {
    for(let magician of magicians){
        console.log(magician)
    }
}
show_magician(magicians)

//        ---Q42---
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies 
// the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magician: string[] = ["Alice", "David", "Chris"];

function make_great(magicianArray:string[]) {
    for(let i =0; i < magicianArray.length; i++){
      magician[i] =  "The Great "  +  magicianArray[i]
      console.log(magicianArray[i])
    }
}
function show_magicians(params:string[]) {
    for(let magicians of magician){
        console.log(magicians)
    }
}

show_magicians(magician)
make_great(magician)