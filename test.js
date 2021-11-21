const { performance } = require('perf_hooks');

// const type = (object) => {
//   return [null, undefined].includes(object)
//     ? object
//     : Object.getPrototypeOf(object).constructor;
// };

// console.log(type([1]) == Array);

// const h = { 1: 1, 2: 2 };

// const keys = Object.keys(h);
// const values = Object.values(h);

// console.log("keys", keys);
// console.log("values", values);

// console.log(keys == values);

// Another
// function c() {
//   this.j = 1000_1000_000;
//   console.log(this.j);
// }

// const b = () => {
//   this.aaa = "majid";
//   //   console.log(this);
//   const a = [] == !{};
//   const b = {} == ![];
//   console.log(a);
//   console.log(b);
//   c();
// };

// b();

// class child {
//   constructor(props) {
//     this.d = this;
//   }
//   //   cal = (e) => {
//   //     return e + 1;
//   //   };

//   render() {
//     return this.d;
//   }
// }

// const g = new child(5);
// console.log(g.render());

// Another

// const p = new Promise(function (resolve, reject) {
//   return resolve(1);
// });

// p.then(function (value) {
//   console.log(value);
// });

// another

// const a = 0.1;
// const b = 0.2;
// console.log(a + b);

// const a = [1, 2, 3];
// const b = [3, 2, 1];
// console.log(a.sort() === a, b.sort() === b, a.sort() === b.sort());

/** numeral */
// const romanKeys = {
//   M: 1000,
//   CM: 900,
//   D: 500,
//   CD: 400,
//   C: 100,
//   XC: 90,
//   L: 50,
//   XL: 40,
//   X: 10,
//   IX: 9,
//   V: 5,
//   IV: 4,
//   I: 1,
// };
// const ERROR_MESSAGE = 'Number is too big:';

// const RomanNumerals = {
//   toRoman: ({ num }) => {
//     let str = '';
//     try {
//       for (const key of Object.keys(romanKeys)) {
//         const division = Math.floor(num / romanKeys[key]);
//         num -= division * romanKeys[key];
//         str += key.repeat(division);
//         if (num === 0) {
//           return str;
//         }
//       }
//     } catch (error) {
//       return `${ERROR_MESSAGE} ${error}`;
//     }
//     return str;
//   },
//   fromRoman: ({ num }) => {
//     let accelerator = 0;
//     try {
//       for (let key = 0; key < num.length; key++) {
//         const currentNumber = romanKeys[num[key]];
//         const nextNumber = romanKeys[num[key + 1]];
//         if (!currentNumber) {
//           return 'Please enter valid roman number';
//         }
//         currentNumber < nextNumber
//           ? (accelerator -= currentNumber)
//           : (accelerator += currentNumber);
//       }
//     } catch (error) {
//       return `${ERROR_MESSAGE} ${error}`;
//     }
//     return accelerator;
//   },
// };

// console.log(RomanNumerals.toRoman({ num: 90005 }));
// console.log(RomanNumerals.fromRoman({ num: 'IV' }));

// var x = 0;
// for (var i = 0; i < 10; i++) {
//   console.log(i / 10 + 0.2);
//   console.log((i + 2) / 10);
//   if (i / 10 + 0.2 == (i + 2) / 10) {
//     x++;
//   }
// }

// console.log(x);

// const a = {
//   key: 10,
//   obj: {
//     name: 'ad',
//   },
//   func: () => {
//     return this;
//   },
// };
// const b = {
//   key: 10,
//   obj: {
//     name: 'ad',
//   },
//   func: function () {
//     return this;
//   },
// };
// const k = a.func.bind(a);
// const j = b.func.bind(b);
// console.log(k());
// console.log(j());
// function sum(...rest) {
//   console.log(this);
//   let sum = 0;
//   for (let i = 0; i < rest.length; i++) {
//     sum += rest[i];
//   }
//   rest.reduce((curr, acc) => curr + acc);
//   for (let i in rest) {
//     // sum += rest[i];
//   }
//   return sum;
// }

// console.log(sum(1, 2, 3));

// class Per {
//   constructor() {
//     this.name = 'majid';
//     this.print1 = this.print1.bind(this);
//   }
//   print1() {
//     console.log(this.name);
//     setTimeout(function () {
//       console.log(this.name);
//     }, 100);
//   }
//   print2() {
//     console.log(this.name);
//     setTimeout(() => {
//       console.log(this.name);
//     }, 100);
//   }
// }
// const obj = new Per();
// obj.print1();
// obj.print2();
// console.log(this.name);

// const getNames = (arg, acc = 'name') => arg.filter((item) => item[acc]);

// console.log(getNames([{ name: 'majid' }, {}, { name: 'karim' }, { key: 3 }]));

// const j = { key: 2 };
// let i = Object.assign({}, j);
// // const i = { ...j };
// let b = JSON.parse(JSON.stringify(j));
// b.key = 9;
// i.key = 6;
// console.log(j);
// console.log(i);
// console.log(b);

// function func(e) {
//   return (e.key = 5);
// }

// const data = { key: 1 };

// console.log(func(data));
// console.log(data);

/** curring */
// const a = (str1) => {
//   const strE = str1 + 10;
//   return (str2) => {
//     return str2 + strE;
//   };
// };

// console.log(a(1)(2));

// function pageDigits(input) {
//   let pages = Number(input);
//   let result = BigInt(0);
//   let max = 0;
//   let tavan = `${BigInt(pages)}`.length;
//   let min = 0;
//   //   tavan = Number(Math.ceil(Math.log10(pages)));
//   while (pages > 0) {
//     max = Number(pages);
//     tavan -= 1;
//     min = Math.pow(10, tavan);
//     result += BigInt((tavan + 1) * (max - min + 1));
//     pages = min - 1;
//   }
//   if (typeof input === 'bigint') {
//     return BigInt(result * 1n);
//   }
//   return result;
// }

// console.log(performance.now());
// console.log(pageDigits(7088888888888888905n));
// console.log(performance.now());

// function fizzBuzz(n) {
//   let result = '';
//   for (let i = 1; i <= n; i++) {
//     if (i % 15 === 0) result += 'FizzBuzz \n';
//     else if (i % 3 === 0) result += 'Fizz \n';
//     else if (i % 5 === 0) result += 'Buzz \n';
//     else result += `${i} \n`;
//   }
//   return result;
// }

// const n = 15;

// console.log(fizzBuzz(16));

// function normalize(s1) {
//   const s1Arr = s1.split('');
//   const s1NewArr = [];
//   for (let i = 0; i < s1Arr.length; i++) {
//     if (s1Arr[i + 1] !== '#' && s1Arr[i] !== '#') {
//       s1NewArr.push(s1Arr[i]);
//     }
//   }
//   return s1NewArr.join('');
// }

// function normalize2(s1) {
//   let s1Arr = s1.split('');
//   const s1NewArr = [];
//   while (s1Arr.includes('#')) {
//     const indexOf = s1Arr.indexOf('#');
//     s1Arr[indexOf - 1] = '';
//     s1Arr[indexOf] = '';
//     for (let i = 0; i < s1Arr.length; i++) {
//       if (s1Arr[i] !== '') {
//         s1NewArr.push(s1Arr[i]);
//       }
//       s1Arr = s1NewArr;
//     }
//   }
//   return s1Arr.join('');
// }

// function compareStrings(s1, s2) {
//   const s1Arr = normalize2(s1);
//   const s2Arr = normalize2(s2);
//   console.log(s1Arr);
//   console.log(s2Arr);
//   if (s1Arr === s2Arr) return 1;
//   return 0;
// }

// console.log(compareStrings('hacc#kk#', 'hb##ackk##'));

// function calculateDuplicateCharacters(str) {
//   const strArr = str.split('');
//   const strObj = {};
//   let result = [];
//   for (let i in strArr) {
//     if (strObj[strArr[i]]) {
//       strObj[strArr[i]] += 1;
//     } else {
//       strObj[strArr[i]] = 1;
//     }
//   }
//   return strObj;
// }

// function characterCounter(str) {
//   const strObj = calculateDuplicateCharacters(str);
//   const arr = Object.entries(strObj);
//   let prevIndex = undefined;
//   for (let i in strObj) {
//     if (prevIndex !== undefined && prevIndex !== strObj[i]) {
//       return false;
//     }
//     prevIndex = strObj[i];
//   }
//   return true;
// }

// console.log(characterCounter('aabb'));

// // WTF
// function validateWord(s) {
//   let freq = {};
//   s.toLowerCase()
//     .split('')
//     .forEach(function (s) {
//       freq[s] ? freq[s]++ : (freq[s] = 1);
//     });

//   console.log(Object.values(freq));
//   return new Set(Object.values(freq)).size === 1;
// }

// console.log(validateWord('aabbcc'));

// function decode(message) {
//   let str = '';
//   const chars = [...'zyxwvutsrqponmlkjihgfedcba'];
//   [...message].forEach((item) => {
//     const reversIndex = chars
//       .slice()
//       .reverse()
//       .findIndex((i) => i === item);
//     str += chars[reversIndex] || ' ';
//   });
//   return str;
// }

// console.log(decode('r slkv mlylwb wvxlwvh gsrh nvhhztv'));
// console.log(String.fromCharCode(65));

// function main(n) {
//   console.log(`Hello ${n}`);
// }

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question('', function (num) {
//   main(num);
//   rl.close();
// });

// function solve(arrOfPoints) {
//   // Calculate min, max and median
//   const min = Math.min(...arrOfPoints);
//   const max = Math.max(...arrOfPoints);
//   const halfArray = Math.floor(arrOfPoints.length / 2);
//   const sortedArray = [...arrOfPoints].sort((a, b) => a - b);
//   const median =
//     arrOfPoints.length % 2 !== 0
//       ? sortedArray[halfArray]
//       : (sortedArray[halfArray - 1] + sortedArray[halfArray]) / 2;

//   return {
//     min,
//     max,
//     median,
//   };
// }

// function solve(arrOfApplicationScores) {
//   let mostRelatedApplicationName = [];
//   let bigNumber = 0;
//   arrOfApplicationScores.forEach((element) => {
//     if (bigNumber < element[1]) {
//       bigNumber = element[1];
//       mostRelatedApplicationName = element;
//     }
//   });
//   return mostRelatedApplicationName[0];
// }

// function solve(kebabCaseObjecy) {
//   const pascalCasedObjecy = {};
//   for (let key in kebabCaseObjecy) {
//     pascalCasedObjecy[
//       key
//         .replace(/-/g, ' ')
//         .replace(/\b\w/g, (l) => l.toUpperCase())
//         .replace(/\s/g, '')
//     ] = kebabCaseObjecy[key];
//   }

//   return pascalCasedObjecy;
// }

// const toPascal = (str) => {
//   return str
//     .replace(/-/g, ' ')
//     .replace(/\b\w/g, (l) => l.toUpperCase())
//     .replace(/\s/g, '');
// };

// function solve(obj) {
//   if (obj === Object(obj) && !Array.isArray(obj) && typeof obj !== 'function') {
//     const world = {};
//     Object.keys(obj).forEach((el) => {
//       world[toPascal(el)] = solve(obj[el]);
//     });
//     return world;
//   } else if (Array.isArray(obj)) {
//     return obj.map((i) => {
//       return solve(i);
//     });
//   }
//   return obj;
// }

// function solve(flatComments, id = null) {
//   return flatComments.reduce((curr, el) => {
//     if (el.parentId === id) {
//       const obj = { ...el };
//       const children = solve(flatComments, el.id);
//       obj.children = children;
//       delete obj.parentId;
//       curr.push(obj);
//     }
//     return curr;
//   }, []);
// }

// function solve({ url, params, query }) {
//   const paramKey = Object.keys(params);
//   const splitUrl = url.split(':').join('').split('/');
//   let j = '';
//   const rest = [];
//   const newUrl = Object.keys(query || {})
//     .map((key) => key + '=' + query[key])
//     .join('&');
//   const newSplitUrl = splitUrl
//     .map((key, index) => {
//       if (index >= 3) {
//         return key;
//       }
//       rest.push(key);
//     })
//     .filter((el) => el !== undefined);
//   for (let i in params) {
//     j = newSplitUrl.map((item) => params[item]).join('&');
//   }
//   return `${rest.join('/')}/${params.id}${newUrl && '/?'}${newUrl}`;
// }

// console.log(
//   solve({
//     url: 'https://cafebazaar.ir/apps/:type/:id/',
//     params: {
//       id: 'com.farsitel.bazaar',
//       random: 'xyz',
//     },
//     query: {
//       ref: 'direct',
//       l: 'en',
//     },
//   })
// );

// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(reject, 100, 'foo')
// );
// const promises = [promise1, promise2];

// const j = async () => {
//   try {
//     const result = Promise.allSettled(promises).then((res) => {
//       console.log(res);
//     });

//     return result;
//   } catch (e) {}
// };
//then((results) => results.forEach((result) => console.log(result.status)));
// console.log(j());
// expected output:
// "fulfilled"
// "rejected"

// function lastDigit(as) {
//   if (as.length === 1) return 1;
//   const arr = JSON.parse(JSON.stringify(as));
//   const second = arr.slice(arr.length - 1)[0];
//   const first = arr.slice(arr.length - 2)[0];
//   const res = BigInt(second) ** BigInt(first);
//   const res2 = BigInt(4) ** BigInt(216);
//   arr.pop();
//   arr.pop();
//   const newArr = [...arr, res.toString()];
//   if (newArr.length > 1) {
//     return lastDigit(newArr);
//   }
//   const getLastDigit = (num) => +(num + '').slice(-1);
//   return BigInt(getLastDigit(newArr[0]));
// }

// console.log(lastDigit([12, 30, 21]));

// const abs = (num) => Math.abs(num);

// const isDivideBy = (number, a, b) =>
//   abs(number) % abs(a) && abs(number) % abs(b);

// function sumFibs(num) {
//   return fibonacciSequence(num)
//     .filter((n) => n % 2 === 0)
//     .reduce((cur, acc) => cur + acc, 0);
// }

// const sumFibs = (n, a = 1, b = 1, sum = 0) =>
//   n <= 0 ? sum : sumFibs(n - 1, b, a + b, sum + (a % 2 == 0 ? a : 0));
