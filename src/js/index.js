'use strict';
//Действия с элементами на странице

//В консоли будут объекты, поэтому можно будет обратиться к их свойствам
const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('heart');

//Обратиться к стилям объекта box и поменять их
//Эти стили будут важнее тех, что прописсаны в файле css
box.style.backgroundColor = 'blue';
box.style.width = '500px'; //тк значение передается цифрами+буквами, нужно обернуть в кавычки - это строка
//как записать все стили одной строкой для этого элемента. Используем cssText
// box.style.cssText = 'background-color: blue; width: 500px';
//Если информация внутри меняется, то есть такая форма записи
// box.style.cssText = `background-color: blue; width: ${num}px`;

//меняем стиль второй кнопки
btns[1].style.borderRadius = '100%';
//тк мы обращаемся к псевдомассиву, обязательно нужно указывать номер элемента
//потому что применять стили ко всему массиву нельзя
circles[0].style.backgroundColor = 'red';

//Если над несколькими элементами нужно произвессти действие
//1
// for(let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

//2 Более современный
hearts.forEach(item => {
    item.style.backgroundColor = 'yellow';
});

//Методы для работы со страницами
//Создать тег (он появится только в js)
const div = document.createElement('div');
// const text = document.createTextNode('I am here');

//Добавить элемент на страницу
//1
div.classList.add('black');
document.body.append(div); //куда именно его вставить(в конец body)
//2 
// document.querySelector('.wrapper').append(div);

const wrapper = document.querySelector('.wrapper');
// wrapper.prepend(div); //вставит элемент в начало

wrapper.appendChild(div);//Поместим объект в конец родителя
//3
// hearts[0].before(div);//ставим перед первым сердечком
// hearts[0].after(div);//ставим после первого сердечка

//Удалить объекты
// circles[0].remove();

//Один элемент заменить другим
// hearts[0].replaceWith(circles[0]);

//Добавление HTML через JS
//1 Можно добавлять HTML структуру, а не только текст
div.innerHTML = "<h1>Hello World!</h1>";
//2 Работает ТОЛЬКО с текстом
// div.textContent = "Hello!";

//Как вставить кусок html-кода в конкретное место
//insertAdjacentHTML - ключевое слово
//afterbegin - перед началом
//afterend/beforeend/beforebegin
div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>');





// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function() {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//     rememberMyFilms: function() {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних просмотренных фильмов?', ''),
//                   b = prompt('На сколько оцените его?', '');
        
//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: function() {
//         if (personalMovieDB.count < 10) {
//             console.log("Просмотрено довольно мало фильмов");
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log("Вы классический зритель");
//         } else if (personalMovieDB.count >= 30) {
//             console.log("Вы киноман");
//         } else {
//             console.log("Произошла ошибка");
//         }
//     },
//     showMyDB: function(hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function() {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function() {
//         for (let i = 1; i < 2; i++) {
//             let genre = prompt(`Ваш любимый жанр под номером ${i}`);

//             if (genre === '' || genre == null) {
//                 console.log('Вы ввели некорректные данные или не ввели их вовсе');
//                 i--;
//             } else {
//                 personalMovieDB.genres[i - 1] = genre;
//             } 
            
            // Альтернативный вариант из урока
            
            // let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

            // if (genres === '' || genres == null) {
            //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
            //     i--;
            // } else {
            //     personalMovieDB.genres = genres.split(', ');
            //     personalMovieDB.genres.sort();
            // } 




//         }

//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//     }
// };