let num = 10
let str = "Asdsad"
let bool = true
let fun = function () { return "asd" }
let arr = [1,2,3]
let obj = { a: 10 }


console.log(num.__proto__.__proto__ === str.__proto__.__proto__)
console.log(num.__proto__.__proto__ === obj.__proto__)

console.log(typeof Number)
console.log(typeof Function)
console.log(typeof Object)
console.log(typeof Array)