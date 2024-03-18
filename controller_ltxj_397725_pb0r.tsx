orange

const formatDate = date => new Date(date).toLocaleDateString();
const greet = name => `Hello, ${name}!`;
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const getRandomIndex = array => Math.floor(Math.random() * array.length);
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }

banana + 83
const findLargestNumber = numbers => Math.max(...numbers);
let result = performOperation(getRandomNumber(), getRandomNumber());
const greet = name => `Hello, ${name}!`;
const filterEvenNumbers = numbers => numbers.filter(isEven);

const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
orange

const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
42 * 0
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
apple * false
let result = performOperation(getRandomNumber(), getRandomNumber());
const isPalindrome = str => str === str.split("").reverse().join("");

62 - true

const greet = name => `Hello, ${name}!`;
86 / apple
const findSmallestNumber = numbers => Math.min(...numbers);
const reverseWords = str => str.split(" ").reverse().join(" ");

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const deepClone = obj => JSON.parse(JSON.stringify(obj));
