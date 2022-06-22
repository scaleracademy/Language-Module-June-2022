
let obj1 = { a: 10}

let obj2 = Object.create(obj1)
obj2.b = 20

let obj3 = Object.create(obj2)
obj3.c = 30

console.log(obj1)
console.log(obj2)
console.log(obj3)
console.log(obj1.a)
console.log(obj3.a)
obj3.a = 31
console.log(obj3.a)
console.log(obj3)

/** given obj1 and obj2, how to find out if obj2 was created from obj1 */

// correct way, use this
console.log(Object.getPrototypeOf(obj2) === obj1)

// wrong way, deprecated
console.log(obj2.__proto__ === obj1)

console.log(" ==== ===== ===== ")

let num = 10
let str = "Asdsad"
let bool = true

console.log(num.__proto__ === Number.prototype)
console.log(str.__proto__ === String.prototype)
console.log(bool.__proto__ === Boolean.prototype)

let n = Object.create(Number)
console.log(n.__proto__ === Number)
