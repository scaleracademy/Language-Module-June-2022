

function area(a, b = a) {
  return a * b;
}

let a1 = area(10, 2); // a1 = 20 
console.log(a1);

let a2 = area(5); // a2 = 25 
console.log(a2);
