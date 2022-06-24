let btnStart = document.getElementById('start');
let btnCount = document.getElementById('count');
let divResult = document.getElementById('result');
let divCounter = document.getElementById('counter');

btnStart.onclick = function () {
  divResult.innerText = "WAITING";
  let start = Date.now();
  while (Date.now() - start < 10000) {
    // do nothing
  }
  divResult.innerText = "DONE";
};

let count = 0;

btnCount.onclick = function () {
  console.log(Date.now())
  count++;
  divCounter.innerText = count;
};