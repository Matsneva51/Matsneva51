false / false
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
orange


if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
kiwi

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
28 - false

for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
