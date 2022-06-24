const fs = require('fs');

/** BASIC
 * 1. read the numbers from file1.txt
 * 2. sort them in ascending order
 * 3. write the sorted numbers to out.txt
 */
 fs.readFile(`${__dirname}/file1.txt`, (err, data) => {
    if (err) throw err;
  
    const sortedNum = data.toString()
        .split('\n')
        .map((char) => Number(char))
        .sort((a, b) => a - b);

    fs.writeFile(`${__dirname}/out.txt`, sortedNum.toString(), (err) => {
        if (err) throw err;
        
        console.log(' write success');
    })
  
  })

/** ADVANCED
 * 1. read the numbers from file1.txt
 * 2. read the numbers from file2.txt
 * 2. sort the combined list of all numbers in ascending order
 * 3. write the sorted numbers to out.txt
 */
 fs.readFile(`${__dirname}/file1.txt`, (err1, data1) => {
    if (err1) throw err1;
    
    fs.readFile(`${__dirname}/file2.txt`, (err2, data2) => {
        if (err2) throw err2;
        
        const list1 = data1.toString()
            .split('\n')
            .map((char) => Number(char));

        const list2 = data2.toString()
            .split('')
            .filter((char) => char !== '\n')
            .map((char) => Number(char));

        const combinedList = [...list1, ...list2];
        const sortedList = combinedList.sort((a, b) => a - b);
        fs.writeFile(`${__dirname}/out2.txt`, sortedList.toString(), (err) => {
            if (err) throw err;
            
            console.log(' write success');
        })
      })  
  })

