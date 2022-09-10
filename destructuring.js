// Object Destructuring 1 //
/*
Object Destructuring 1
What does the following code return/print?

let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // ?
console.log(yearNeptuneDiscovered); // ?
*/

// It prints:
// 8
// 1846






// Object Destructuring 2 //
/*
What does the following code return/print?

let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts;

console.log(discoveryYears); // ?
*/

// It prints:
// { yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659 }






// Object Destructuring 3 //
/* 
What does the following code return/print?

function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
getUserData({firstName: "Melissa"}) // ?
getUserData({}) // ?
*/

// It returns:
// "Your name is Alejandro and you like purple"
// "Your name is Melissa and you like green"
// "Your name is undefined and you like green"






// Array Destructuring 1 //
/*
What does the following code return/print?

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // ?
console.log(second); // ?
console.log(third); // ?
*/

// It prints :
// "Maya"
// "Marisa"
// "Chi"






// Array Destructuring 2 //
/*
What does the following code return/print?

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
]

console.log(raindrops); // ?
console.log(whiskers); // ?
console.log(aFewOfMyFavoriteThings); // ?
*/

// It prints:
// "Raindrops on roses"
// "whiskers on kittens"
// ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]






// Array Destructuring 3 //
/*
What does the following code return/print?

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // ?
*/

// It prints:
// [10, 30, 20]






// Assigning Variables to Object Properties
// ES2015 Version //
const obj = {
    numbers: {
        a: 1,
        b: 2
    }
}

let {a, b} = obj.numbers



// Array Swap //
// ES2015 Version //
let arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]]



// Race Results //
let raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})

console.log(raceResults(['Steve', 'Jess', 'Tom', 'Misty', 'Joe', 'Bob']).rest)
