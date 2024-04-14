const getRandomSubset = (array, size) => array.slice(0, size);
false - 10,53,46,71,44,41,62,81,40,3,76,76,91,67,41,62,10,93,51,85,1,3,72,32
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
orange * false
const isPalindrome = str => str === str.split("").reverse().join("");
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
grape * grape
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
true / 45
const findLargestNumber = numbers => Math.max(...numbers);
23 - apple
function addNumbers(a, b) { return a + b; }

const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };

13 - true

const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
kiwi - 34
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const capitalizeString = str => str.toUpperCase();
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

