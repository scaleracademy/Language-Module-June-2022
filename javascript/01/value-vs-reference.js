function incrementer(a, b) {
  console.log(`a: ${a},  b: ${b}`)
  a = a + 1 
  b = b + 2
  console.log(`a: ${a},  b: ${b}`)
}

let x = 10
let y = 20 

console.log(`x: ${x},  y: ${y}`)
incrementer(x, y)
console.log(`x: ${x},  y: ${y}`)

// i.e. JavaScript is pass-by-value 

console.log("=============")

function modifier(a, b) {
  console.log(a, b)
  a[0] = 1
  b[1] = 2
  console.log(a, b)
}

let p = [4,7,9]
let q = [3,6,8]

console.log(p, q)
modifier(p, q)
console.log(p,q)

// but then, JS is also pass-by-reference ? NO