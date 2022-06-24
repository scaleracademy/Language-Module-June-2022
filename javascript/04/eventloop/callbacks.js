
console.log('start');

function doSomething(callback) {
  console.log('doSomething');
  callback();
}

doSomething(function() {
  console.log('done');
});

console.log('end');

/**
 * start end dosomething done 43% 
 * start dosomething done end  43% ✅
 * start dosomething end done 14%
 */