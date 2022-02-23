'use strict';
//События и их обработчики

/*Чтобы использовать событие, мы должны назначить обработчик событий.
Обработчик события  - это функция, которая срабатывает, как только событие произошло.
*/
//в html <button onclick="alert('Click')" id="btn">Нажми меня</button>
//такой код используется только в маленьких проектах, лучше не использовать

//Лучше использовать свойства DOM-дерева для событий
    //const btn = document.querySelector('button');//выбираем кнопки на странице

//Хорошо, только если супермаленький проект, но лучше не использовать 
    // btn.onclick = function() {
    //     alert();
    // }

//Лучший вариант:
// btn.addEventListener('click', () => {
//     alert('Click');
// });

//События выполняются по очереди.
//mouseenter - отслеживает наведение мышки

// btn.addEventListener('mouseenter', (e) => { //e или event прописывается обязательно, после можно передать свои аргументы через запятую
//     console.log(e.target);
//     e.target.remove(); //удалит эту кнопку при наведении
// });

//удалить обработчик события
const deleteElement = (e) => {
    e.target.remove();
};
// btn.addEventListener('click', deleteElement);

//Как отменить стандартное поведение в браузере.
const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();//По ссыке больше не перейдет
    console.log(event.target);//при клике будет каждый раз выводить в консоль
});

//Как повесить обработчики на несколько кнопок сразу
const btns = document.querySelectorAll('button');

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement);
});






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