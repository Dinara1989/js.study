'use strict';
//Навигация по DOM-элементам, data-атрибуты, преимущество for/of

// console.log(document.head);
//console.log(document.documentElement);
// console.log(document.body);
//console.log(document.body.childNodes);//все узлы (ноды) в body
//firstChild, lastChild как варианты обращения к узлам родителя

//Как получить родителя, соседей и детей
//console.log(document.querySelector('#current').parentNode);

//Если нужно получить родителя родителя, то команду задваиваем 
//console.log(document.querySelector('#current').parentNode.parentNode);

//Data-атрибуты - это замена id на странице. Синтаксис data-произвольная часть, например data-modal  или data-current = "3"
//Эти атрибуты расставляются в html-файле внутри тегов, которые нам нужны.
//console.log(document.querySelector('[data-current="3"]').nextSibling);//получаем следующую ноду, как правило это перенос строки
//console.log(document.querySelector('[data-current="3"]').nextElementSibling);//Получим следующий элемент, а не ноду

//Прописывая Node, мы получим ноду, поэтому если нужен сам элемент, нужно прописать Element

//Перебрать все ноды, исключая текст
for (let node of document.body.childNodes) {
    if(node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}