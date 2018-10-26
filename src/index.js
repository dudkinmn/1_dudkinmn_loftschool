/* jshint esversion: 6 */ 

import * as lesson1 from './lesson1.js';
console.log('тест 1');

var f = lesson1.returnCounter();

console.log(f());
console.log(f());
console.log(f());

console.log('тест 2');

var l = lesson1.returnCounter(20);

console.log(l());
console.log(l());
console.log(l());

console.log('тест returnArgumentsArray');

var arr = lesson1.returnArgumentsArray(1, 'two', 'belka', 'kuku');

for (let i=0; (i < arr.length); i++ ) {
    console.log(arr[i]);
}
