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

(async () => {

  try {
    const data1 = fs.readFile(`${__dirname}/file1.txt`);
    const data2 = fs.readFile(`${__dirname}/file2.txt`);

    const nums1 = (await data1).toString().split(os.EOL);
    const nums2 = (await data2).toString().split(os.EOL);
    const nums = [...nums1, ...nums2].sort((a, b) => a - b);
    const output = nums.join(os.EOL);

    await fs.writeFile(`${__dirname}/out.txt`, output);

    console.log('all done');
  } catch (err) {
    console.error('something went wrong' + err)
  }

})();



(async () => {

  try {
    const [data1, data2] = await Promise.all([
      fs.readFile(`${__dirname}/file1.txt`),
      fs.readFile(`${__dirname}/file2.txt`)
    ])

    const nums1 = data1.toString().split(os.EOL);
    const nums2 = data2.toString().split(os.EOL);
    const nums = [...nums1, ...nums2].sort((a, b) => a - b);
    const output = nums.join(os.EOL);

    await fs.writeFile(`${__dirname}/out.txt`, output);

    console.log('all done');
  } catch (err) {
    console.error('something went wrong' + err)
  }

})();