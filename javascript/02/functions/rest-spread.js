// rest
function sum(...args) {
  return args.reduce((acc, curr) => acc + curr);
}

console.log(sum(1, 2, 3, 4, 5));

// spread
function print(a, b, c) {
  console.log("A: " + a);
  console.log("B: " + b);
  console.log("C: " + c);
}

print(...['car', 'bike', 'bus']);