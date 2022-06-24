const fsOld = require('fs');
const os = require('os');
const util = require('util');

util.promisify

const fs = {
  readFile: function (fileName) {
    return new Promise((resolve, reject) => {
      fsOld.readFile(fileName, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
  writeFile: function (fileName, data) {
    return new Promise((resolve, reject) => {
      fsOld.writeFile(fileName, data, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  },
};

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
  .then(data1 => fs.readFile(`${__dirname}/file2.txt`)
    .then(data2 => {
      const nums1 = data1.toString().split(os.EOL);
      const nums2 = data2.toString().split(os.EOL);
      const nums = [...nums1, ...nums2].sort((a, b) => a - b);
      const output = nums.join(os.EOL);

      return fs.writeFile(`${__dirname}/out.txt`, output)
        .then(() => { console.log('all done'); });
    }))
  .catch(err1 => {
    console.error('Some error happened');
    console.error(err1);
  });

