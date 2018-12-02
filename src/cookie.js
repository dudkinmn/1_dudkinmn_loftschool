/* jshint esversion: 6 */ 

/*
 ДЗ 7 - Создать редактор cookie с возможностью фильтрации

 7.1: На странице должна быть таблица со списком имеющихся cookie. Таблица должна иметь следующие столбцы:
   - имя
   - значение
   - удалить (при нажатии на кнопку, выбранная cookie удаляется из браузера и таблицы)

 7.2: На странице должна быть форма для добавления новой cookie. Форма должна содержать следующие поля:
   - имя
   - значение
   - добавить (при нажатии на кнопку, в браузер и таблицу добавляется новая cookie с указанным именем и значением)

 Если добавляется cookie с именем уже существующией cookie, то ее значение в браузере и таблице должно быть обновлено

 7.3: На странице должно быть текстовое поле для фильтрации cookie
 В таблице должны быть только те cookie, в имени или значении которых, хотя бы частично, есть введенное значение
 Если в поле фильтра пусто, то должны выводиться все доступные cookie
 Если дабавляемая cookie не соответсвуте фильтру, то она должна быть добавлена только в браузер, но не в таблицу
 Если добавляется cookie, с именем уже существующией cookie и ее новое значение не соответствует фильтру,
 то ее значение должно быть обновлено в браузере, а из таблицы cookie должна быть удалена

 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */

document.cookie = 'one=11';
document.cookie = 'two=22';
document.cookie = 'three=33';
document.cookie = 'four=44';
document.cookie = 'five=55';
document.cookie = 'six=66';
document.cookie = 'seven=77';
document.cookie = 'eich??=88';
document.cookie = 'nine??=99';

const homeworkContainer = document.querySelector('#homework-container');
// текстовое поле для фильтрации cookie
const filterNameInput = homeworkContainer.querySelector('#filter-name-input');
// текстовое поле с именем cookie
const addNameInput = homeworkContainer.querySelector('#add-name-input');
// текстовое поле со значением cookie
const addValueInput = homeworkContainer.querySelector('#add-value-input');
// кнопка "добавить cookie"
const addButton = homeworkContainer.querySelector('#add-button');
// таблица со списком cookie
const listTable = homeworkContainer.querySelector('#list-table tbody');

filterNameInput.addEventListener('keyup', render); // здесь можно обработать нажатия на клавиши внутри текстового поля для фильтрации cookie

addButton.addEventListener('click', () => {
    // здесь можно обработать нажатие на кнопку "добавить cookie"
    var date = new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000);

    document.cookie = `${addNameInput.value}=${addValueInput.value}`;
    addNameInput.value = '';
    addValueInput.value = '';
    render();

});

listTable.addEventListener('click', delCookie);

function delCookie(e) {

    let nameCookie = e.target.parentNode.parentNode.firstChild.textContent;
    let date = new Date(0);

    e.preventDefault();

    console.log(nameCookie);

    document.cookie = `${nameCookie}=; expires=${date}`;

    render();
}

render();

function render() {

    let cookie = document.cookie.split(';');
    let createDeleteBtn = true;
    
    while (listTable.hasChildNodes()) {
        listTable.removeChild(listTable.lastChild);
    }

    if (cookie.length) {
        for (let i = 0; i < cookie.length; i++ ) { // вот тут мне куча ифов не нравится()
            if (filterNameInput.value !== '') {
                if (cookie[i].split('=')[0].includes(filterNameInput.value)) {
                    displayElement(cookie[i].split('=')[0], cookie[i].split('=')[1], createDeleteBtn);
                }

            } else {
                displayElement(cookie[i].split('=')[0], cookie[i].split('=')[1], createDeleteBtn);
            }
        }
    }

}

function displayElement() {

    let row = document.createElement('tr');

    for (let i = 0; i < arguments.length; i++) {

        let cell = document.createElement('td');

        if (typeof arguments[i] == 'string') {
            cell.textContent = arguments[i];
        } else if (typeof arguments[i] === 'boolean') {

            let delBtn = document.createElement('a');

            delBtn.textContent = 'delete';
            delBtn.setAttribute('href', 'javascript: void(0);');
            cell.appendChild(delBtn);
        }
        row.appendChild(cell);
    }

    listTable.appendChild(row);
}

render();

