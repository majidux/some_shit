function solve({ url, params, query }) {}

/// /////////////////////////////////////////////////
/// ///////// DO NOT CHANGE FOLLOWING ///////////////
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on('line', (data) => {
  main(data.trim());
  readline.close();
});

function main(line) {
  console.log(solve(JSON.parse(line)));
}
