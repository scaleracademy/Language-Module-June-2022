const fs = require('fs');

fs.readFile(`${__dirname}/file2.txt`, (err, data) => {
  if (err) throw err;

  console.log(data.toString());

})