function solve({ url, params, query }) {
  const paramKey = Object.keys(params);
  const splitUrl = url.split(':').join('').split('/');
  let j = '';
  const rest = [];
  const newUrl = Object.keys(query || {})
    .map((key) => key + '=' + query[key])
    .join('&');
  const newSplitUrl = splitUrl
    .map((key, index) => {
      if (index >= 3) {
        return key;
      }
      rest.push(key);
    })
    .filter((el) => el !== undefined);
  for (let i in params) {
    j = newSplitUrl.map((item) => params[item]).join('&');
  }
  return `${rest.join('/')}/${params.id}${newUrl && '/?'}${newUrl}`;
}

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
