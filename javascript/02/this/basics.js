// "this" -> Context 


function fun1() {
  this.a = 10;
}

function fun2() {
  console.log(this == globalThis) // true 
  console.log(this.a)
}
console.log(this == globalThis) // false
fun1() 
this.a = 20
fun2()

console.log(this.a)