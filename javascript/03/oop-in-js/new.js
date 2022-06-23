function something() {
  console.log(this)
  this.a = 10
  return 'something';
}

let x = something();
let y = new something();

console.log(x);
console.log(y);