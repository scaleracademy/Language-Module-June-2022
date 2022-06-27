

// setImmediate(() => {
//   process.nextTick(() => {
//     console.log('B');
//   });

//   console.log('A');
  

// });

// process.nextTick(() => {
//   console.log('C');
//   setImmediate(() => console.log('D'))
// });

setImmediate(() => console.log('immediate'))
setTimeout(() => console.log('timeout'), 0)