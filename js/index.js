"use strict";
//Создаем объект
const soldier = {
    health:400,
    armor: 100,
    sayHello: function() {
        console.log("Hello, my General!")
    }
};
//Создаем прототип
const john = {
    health: 100
};
//Присваиваем прототипу свойства объекта
Object.setPrototypeOf(john, soldier);

john.sayHello();





// let numberOfFilms;

// function start(){
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '0');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '0'); 
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms() {
//     for(let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?'),
//               b = prompt('На сколько оцените его?');
    
//         if(a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }  
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >=10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }
// }
// detectPersonalLevel();

// function showMyDB (hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     let genres = [];
//     for(let i = 1; i <= 3; i++) {
//         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres[i - 1] = genre;
//         //Продвинутый (сокрыщенный вариант)
//         //personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
//         //-1 потому что иначе счет в массиве начнется с 0 и это создаст пустую ячейку.
//     }
// }
// writeYourGenres();