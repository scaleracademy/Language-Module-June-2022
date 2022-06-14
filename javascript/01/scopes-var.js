var x = 10 
console.log(x) // 10

function fun() {
  var x = 20
  console.log(x) // 20

  if (true) {
    var x = 30
    console.log(x)  // 30
  }
  console.log(x) // 30

}
fun () 

console.log(x) // 10

/**
 * var has function scope, but not block scope
 */