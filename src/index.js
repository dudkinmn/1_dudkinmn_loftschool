/* jshint esversion: 6 */ 

import * as lesson1 from './lesson1.js';
import * as lesson2 from './lesson2.js';
import * as lesson3 from './lesson3.js';

var testObj = {
    name: 'fedor',
    lastname: 'pupkin',
    old: '22'
};

var testArr = [0, 1, 2, 3, 4, 5, 6, 7];
var testArrTwo = [];
var resultReduse;

function incTwo (item, i, arr) {
    return item + '2' ;
}

function addTest (item, i) {
    return item + 'Test';
}

// lesson2.forEach(testArr, incTwo);

// testArrTwo = lesson2.map(testArr, addTest);

/* for (let i = 0; i < testArrTwo.length; i++) {
    console.log('arg = ' + testArrTwo[i]);
}

for (let i = 0; i < testArr.length; i++) {
    console.log('argOrigin = ' + testArr[i]);
} */

var summ = (a, b) => a + b;

resultReduse = lesson2.reduce(testArr, summ, 0);

console.log('ntcn');

console.log(testObj);
console.log(lesson2.upperProps(testObj));

console.log('22');
