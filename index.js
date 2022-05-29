const chunk = require('./Array/chunk');
const concat = require('./Array/concat');
const compact = require('./Array/compact');
const difference = require('./Array/difference');
const drop = require('./Array/drop');

const arr1 = [1,2,3,4,5,6,7];

const arr2 = [3,5,5,10,23];
const num = 3;

console.log(drop(arr2,0));
// console.log(chunk(arr1,num));
// console.log(difference(arr1,arr2));