// var numbers = [3, 56, 2, 48, 5];

// //Map -Create a new array by doing something with each item in an array.
// console.log(numbers.map((number) => number * 2));

// //Filter - Create a new array by keeping the items that return true.
// console.log(numbers.filter((number) => number > 30));

// //Reduce - Accumulate a value by doing something to each item in an array.
// console.log(numbers.reduce((a, b) => a + b, 0));

// //Find - find the first item that matches from an array.
// console.log(numbers.find((number) => number < 10));

// //FindIndex - find the index of the first item that matches.
// console.log(numbers.findIndex((number) => number > 10));

import emojipedia from "./emojipedia";

console.log(emojipedia.map((e) => e.meaning.substring(100)));
