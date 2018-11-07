/* jshint esversion: 6 */ 

import * as lesson1 from './lesson1.js';
import * as lesson2 from './lesson2.js';
import * as lesson3 from './lesson3.js';
import * as lesson4 from './lesson4.js';
import { isArray } from 'util';

var test1, test2;

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

// console.log(lesson2.upperProps(testObj));

var array = [];

if (!(isArray(array))) {
    console.log ('массив не массив');
}

if (array.length === 0) {
    console.log ('массив пустой');
}

if ((!(isArray(array))) || (array.length === 0)) {
    console.log ('массив пустой или не массив');
}

test1 = lesson3.calculator(1, 2, 3, 4, 5, 6, 7);
test2 = test1.sum();

console.log(test2);
