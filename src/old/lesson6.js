import { rejects } from "assert";

/* ДЗ 6 - Асинхронность и работа с сетью */
/* jshint esversion: 6 */ 
/*
 Задание 1:

 Функция должна возвращать Promise, который должен быть разрешен через указанное количество секунду

 Пример:
   delayPromise(3) // вернет promise, который будет разрешен через 3 секунды
 */
function delayPromise(seconds) {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve();
        }, seconds*1000);
    });

}

/*
 Задание 2:

 2.1: Функция должна вернуть Promise, который должен быть разрешен с массивом городов в качестве значения

 Массив городов пожно получить отправив асинхронный запрос по адресу
 https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json

 2.2: Элементы полученного массива должны быть отсортированы по имени города

 Пример:
   loadAndSortTowns().then(towns => console.log(towns)) // должна вывести в консоль отсортированный массив городов
 */
function loadAndSortTowns() {

/*    return fetch('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json').then( (result) => {
        // console.log(result.json());

        return result.json();
    
    }).then( (result) => {
        console.log(result.sort( (a, b) => a.name > b.name));

        return result.sort( (a, b) => a.name > b.name);
    });

*/
    
    return new Promise ((resolve, reject) => {

        const xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json');
        xhr.responseType = 'json';
        xhr.send();
        xhr.addEventListener('load', () => {
            if (xhr.status >= 400) {
                reject();
            } else {
                resolve(xhr.response.sort(function (a, b) {
                    return ((a.name < b.name) ? -1 : 1) ;
                }));
            /*    console.log(xhr.response.sort(function (a, b) {
                    return ((a.name < b.name) ? -1 : 1) ;
                }));
            */
            }
        });

    }); 
    
}

loadAndSortTowns();

export {
    delayPromise,
    loadAndSortTowns
};
