
function createCounter(init, delta) {
  function count() {
    init = init + delta
    return init
  }
  return count
}

let c1 = createCounter(10, 5)
let c2 = createCounter(5, 2)

console.log(c1())
console.log(c1())

console.log(c2())
console.log(c2())
console.log(c1())

let x = c1() 
let y = c1() 

console.log(x)
console.log(y)
