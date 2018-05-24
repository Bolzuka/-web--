const readFile = require('util').promisify(require('fs').readFile);

async function work() {
  return await readFile(process.argv[1]);
}

work().then(data => {
  console.log(String(data));
})