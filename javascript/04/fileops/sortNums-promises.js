const fs = require('fs').promises;
const os = require('os');

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

fs.readFile(`${__dirname}/file1.txt`)
  .then(data1 => {
    fs.readFile(`${__dirname}/file2.txt`)
      .then(data2 => {
        const nums1 = data1.toString().split(os.EOL);
        const nums2 = data2.toString().split(os.EOL);
        const nums = [...nums1, ...nums2].sort((a, b) => a - b);
        const output = nums.join(os.EOL);

        fs.writeFile(`${__dirname}/out.txt`, output)
          .then(() => { console.log('all done') })
          .catch(err => { throw err })
      })
      .catch(err1 => { });
  })
  .catch(err1 => { });

