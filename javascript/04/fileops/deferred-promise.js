const { resolve } = require('path');


function wait(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 != 0) {
      throw new Error('not even');
    } else {
      setTimeout(resolve, num * 1000);
    }
  });
}

console.log('start');
const start = Date.now();
let waiter = wait(2)

setTimeout(() => {
  waiter.then(() => {
    console.log('waiter resolved');
    console.log(`waited ${Date.now() - start}ms`);
  })
  .catch((err) => {
    console.error('some error happened ' + err)
  })
}, 5000)