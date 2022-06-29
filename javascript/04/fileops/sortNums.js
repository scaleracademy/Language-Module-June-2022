const fs = require('fs');
const os = require('os')

/** BASIC
 * 1. read the numbers from file1.txt
 * 2. sort them in ascending order
 * 3. write the sorted numbers to out.txt
 */
let arr = [];
fs.readFile(`${__dirname}/file1.txt`, (err, data) => {
  if (err) throw err;

  console.log("org", data.toString().split("\n"));
  arr = data.toString().split("\n");
  arr.sort((a, b) => a - b);
  let str = arr.join("\n");
  console.log("new", str);
  fs.writeFile(`${__dirname}/out.txt`, str, (err) => {
    if (err) throw err;

    console.log(" write success");
  });
});

fs.close();




/** ADVANCED
 * 1. read the numbers from file1.txt
 * 2. read the numbers from file2.txt
 * 2. sort the combined list of all numbers in ascending order
 * 3. write the sorted numbers to out.txt
 */


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