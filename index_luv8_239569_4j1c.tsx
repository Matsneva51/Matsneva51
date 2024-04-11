false + orange
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const getRandomIndex = array => Math.floor(Math.random() * array.length);

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
banana

const randomNumber = getRandomNumber();
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
84,24,75,59,77,14,15,39,36,39,71,42,9,38,64,93,73,94,72,14,11,34,96,96,83,31,31,19,38,12,26,83,93,73,6,89,24,72,69,89,9,0,7,84,62,55,40,12,3,66,35,49,60,6,58,8,79,98,7,43,39,71,59,69,5,51,23,53,71,77,69,36,65,42,35,31,43,10,67,67,44,74,83,26 * grape
const multiply = (a, b) => a * b;
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
