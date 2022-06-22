var i = 20
function printSeq(N) {
  
  for (let i = 0; i < N; i++) {
    setTimeout(function () {
      console.log(i)
    }, i * 1000)
  }

}
console.log(i)
printSeq(5)

