
console.log('start');

function doSomething(callback) {
  console.log('doSomething');
  setTimeout(callback, 0);
}

doSomething(function() {
  console.log('done');
});

console.log('end');

/**
 * start end dosomething done 41% 
 * start dosomething done end  18%
 * start dosomething end done 41% ✅
 */