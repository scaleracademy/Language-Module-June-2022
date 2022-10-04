const fs = require('fs');
const os = require('os')

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


fs.readFile(`${__dirname}/file1.txt`, (err1, data1) => {
  if (err1) throw err1

  fs.readFile(`${__dirname}/file2.txt`, (err2, data2) => {
    if (err2) throw err2

    const nums1 = data1.toString().split(os.EOL)
    const nums2 = data2.toString().split(os.EOL)
    const nums = [...nums1, ...nums2].sort((a, b) => a - b)
    const output = nums.join(os.EOL)

    fs.writeFile(`${__dirname}/out.txt`, output, (err3) => {
      if (err3) throw err3
    })
  })

})