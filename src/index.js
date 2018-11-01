/* jshint esversion: 6 */ 

import * as lesson1 from './lesson1.js';
import * as lesson2 from './lesson2.js';

var testArr = [0, 1, 2, 3, 4, 5];
var testArrTwo = [];

function incTwo (item, i, arr) {
    return item + '2' ;
}

function addTest (item, i) {
    return item + 'Test';
}

// lesson2.forEach(testArr, incTwo);

testArrTwo = lesson2.map(testArr, addTest);

for (let i = 0; i < testArrTwo.length; i++) {
    console.log('arg = ' + testArrTwo[i]);
}

for (let i = 0; i < testArr.length; i++) {
    console.log('argOrigin = ' + testArr[i]);
}
