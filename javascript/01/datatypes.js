/**
 * Data Types ? 
 * 
 * - number 
 * - string 
 * - boolean 
 * - null 
 * - undefined
 * - object
 * 
 * Literals ? 
 * - number 
 * - string 
 * - boolean 
 * - array 
 * - object 
 */

let arr = [1, 2, 3];
let obj = { a: 10, b: 20 };

console.log(typeof arr) // object
console.log(typeof obj) // object

console.log("=========================")
console.log(typeof 10) // number
console.log(typeof "Asdasd") // string
console.log(typeof true) // boolean
console.log(typeof undefined) // undefined
console.log(typeof null) // undefined 
console.log(typeof NaN) // number
console.log(typeof BigInt(10)) // bigint

console.log("=========================")

function fun2() {}

function fun1() {
  // .... lots of code here 
  let undefined = 10
  let x = 138;

  // .... you can change only this part ⬇️
  x = void 0;
  // .... you can change only this part ⬆️
  
  
  console.log(x)  // undefined
  console.log(typeof x) // undefined
}

fun1()