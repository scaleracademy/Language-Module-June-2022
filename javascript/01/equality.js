// == : loose equality
// === : strict equality

console.log(1 == "1") // true
console.log(1 === "1") // false


console.log("============")

let arr1 = [ 1, 2 ]
let arr2 = [ 1, 2 ]

console.log(arr1 === arr2) // false

console.log(arr1 == arr2) // false

console.log(arr1.toString() == arr2.toString()) // true

let arr3 = arr1 

console.log(arr1 == arr3)
console.log(arr1 === arr3)

console.log("============")

/**
 * Maths: 
 * 
 * if a = b, and b = c; then a = c 
 * associative property
 * 
 * JavaScript 
 * 
 * if a == b, and b == c; then a == c
 * associative ? NO
 * 
 * 
 * if a === b, and b === c; then a === c
 * associative ? YES
 */
let a = ""; 
let b = 0; 
let c = "0";

console.log(a == b) // true
console.log(b == c) // true
console.log (a == c)  // true

