const chunk = require('./chunk');
const concat = require('./concat');
const compact = require('./compact');
const difference = require('./difference');

const arr1 = [1,2,3,4,5,6,7];

const arr2 = [3,5,5,10,23];
const num = 3;


// console.log(chunk(arr1,num));
console.log(difference(arr1,arr2));