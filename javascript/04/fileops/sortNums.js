const fs = require('fs');

/** BASIC
 * 1. read the numbers from file1.txt
 * 2. sort them in ascending order
 * 3. write the sorted numbers to out.txt
 */

/** ADVANCED
 * 1. read the numbers from file1.txt
 * 2. read the numbers from file2.txt
 * 2. sort the combined list of all numbers in ascending order
 * 3. write the sorted numbers to out.txt
 */

// Basic Code
const fs = require('fs');

fs.readFile(`${__dirname}/file1.txt`, (err, data) => {
  if (err) throw err;
  
  const sorted = data.toString().split("\r\n").sort().join("\r\n");

  fs.writeFile(`${__dirname}/out.txt`, sorted, (error) => {
    if (error) throw error;
    console.log(' write success');
  })

})
