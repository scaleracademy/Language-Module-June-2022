

console.log('start')

setTimeout(() => {
  console.log('timeout')
}, 0)

Promise.resolve().then(() => {
  console.log('promise')
})

queueMicrotask(() => {
  console.log('microtask')
})

console.log('end')