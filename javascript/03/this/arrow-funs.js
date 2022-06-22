/** 
 * Lambda functions or arrow functions 
 * 
 * y = ƛ(x)
 */

let sqr = x => x * x;

function square(x) {
  return x * x
}

console.log(sqr(2));
console.log(sqr(3));


let fun1 = (x, y) => {
  if (typeof x === 'number') return x * y 
  if (typeof x === 'string') return x + y
}
let fun2 = (x , y) => typeof x === 'number' ? x * y : x + y;

console.log(fun1(2, 3));
console.log(fun1('2', '3'));

this.a = 10;
let obj1 = { k : 'asdasd '}
let obj2 = { p: true, q: 10 }

let arrowFunThis = () => {
  console.log(this); // "lexical this"
}

function normalFunThis () {
  console.log(this);
}

obj1.aft = arrowFunThis
obj1.nft = normalFunThis
obj2.aft = arrowFunThis
obj2.nft = normalFunThis

console.log("========================")

arrowFunThis()
normalFunThis()
console.log("========================")

obj1.aft()
obj1.nft()
console.log("========================")
obj2.aft()
obj2.nft()
