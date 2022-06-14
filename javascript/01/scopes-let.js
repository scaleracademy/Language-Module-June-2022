let x = 10 
console.log(x) // 10

function fun() {
  let x = 20
  console.log(x) // 20

  if (true) {
    let x = 30
    console.log(x)  // 30
  }
  console.log(x) // 20

}
fun () 

console.log(x) // 10

/**
 * let has block scope
 */