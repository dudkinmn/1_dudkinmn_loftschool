/* jshint esversion: 6 */ 

import { isUndefined } from 'util';

/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    let arr = array.slice();

    for (let i = 0; i < arr.length; i++) {
        arr[i] = fn(arr[i], i, array);
    }

    return arr;

}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    var i, previosValue;

    if (isUndefined(initial)) {
        i = 1;
        previosValue = array[0];
    } else {
        i = 0;
        previosValue = initial;
    }

    for (i; i < array.length; i++) {
        previosValue = fn(previosValue, array[i], i, array);
    }

    return previosValue;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    let result = [];

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push(key.toUpperCase());
        }
    } 

    return result;

    /* var props = [];
    var i = 0;

    function toUpp(name) {
        console.log(toString(name).toUpperCase());
    
        return toString(name).toUpperCase();
        
    }

    for (var propsName in obj) {
        if (obj.hasOwnProperty(propsName)) {
            props[i] = toUpp(propsName);
            i++;
        };

    }

    return props;  */
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
    var x;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    var x;
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
