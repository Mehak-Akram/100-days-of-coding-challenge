//      ---Q37---
////Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirts(size : string = "large", text : string = "I Love Typescript"){
    console.log(`creating a ${size} shirt with the messge: ${text}`);
}

make_shirts();

make_shirts("medium")

make_shirts("small", "I Love Pythone")

//      ---Q38---

//Cities: Write a function called describe_city() that accepts the name of a city and its country. 
//The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value
//. Call your function for three different cities, at least one of which is not in the default country.

function describeCities(city : string, country : string = "pakistan."){
    console.log(`${city} is in ${country} `);
}

describeCities("Karachi")
describeCities("Istanbul", "Turkey")
describeCities("Tokyo", "Japan")

//      ---Q39---

//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city : string, country : string,){
    return `${city},${country}`
}

console.log(city_country("Lahore" , "Pakistan"))
console.log(city_country("Istanbul" , "Turkey"))
console.log(city_country("Tokyo" , "Japan"))