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

console.log(fun1(2, 3));
console.log(fun1('2', '3'));

this.a = 10;

let arrowFunThis = () => {
  console.log(this);
}

function normalFunThis () {
  console.log(this);
}

