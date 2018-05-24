try {
  const x = require('fs').readFileSync(process.argv[1]);
  console.log(String(x));
} catch (e) {
  console.log(e);
}