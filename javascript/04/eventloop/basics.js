let halt = false; 


while(!halt) {
    console.log('Hello World');
}

setTimeout(() => {
    halt = true;
}, 2000);

