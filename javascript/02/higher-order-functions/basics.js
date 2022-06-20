function myFun() {
  console.log("wow!")
}

myFun()

let x = myFun
let y = myFun() 

console.log(typeof x)
console.log(typeof y)

function runner(fun) {
  if (typeof fun === 'function') {
    fun()
  }
}

runner(x)
runner(10)


// typeof x ? 
// typeof y ? 

