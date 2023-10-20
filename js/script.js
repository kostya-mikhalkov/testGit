// // /* Задания на урок:

// // 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
// // новый фильм добавляется в список. Страница не должна перезагружаться.
// // Новый фильм должен добавляться в movieDB.movies.
// // Для получения доступа к значению input - обращаемся к нему как input.value;
// // P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

// // 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

// // 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

// // 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
// // "Добавляем любимый фильм"

// // 5) Фильмы должны быть отсортированы по алфавиту */

// // 'use strict';

// // document.addEventListener('DOMContentLoaded', () => {

// //     const movieDB = {
// //         movies: [
// //             "Логан",
// //             "Лига справедливости",
// //             "Ла-ла лэнд",
// //             "Одержимость",
// //             "Скотт Пилигрим против..."
// //         ]
// //     };

// //     const adv = document.querySelectorAll('.promo__adv img'),
// //         poster = document.querySelector('.promo__bg'),
// //         genre = poster.querySelector('.promo__genre'),
// //         movieList = document.querySelector('.promo__interactive-list'),
// //         addForm = document.querySelector('form.add'),
// //         addInput = addForm.querySelector('.adding__input'),
// //         checkbox = addForm.querySelector('[type="checkbox"]');

// //     addForm.addEventListener('submit', (event) => {
// //         event.preventDefault();

// //         let newFilm = addInput.value;
// //         const favorite = checkbox.checked;

// //         if (newFilm) {

// //             if (newFilm.length > 21) {
// //                 newFilm = `${newFilm.substring(0, 22)}...`;
// //             }

// //             if (favorite) {
// //                 console.log("Добавляем любимый фильм");
// //             }

// //             movieDB.movies.push(newFilm);
// //             sortArr(movieDB.movies);
    
// //             createMovieList(movieDB.movies, movieList);
// //         }

// //         event.target.reset();

// //     });

// //     const deleteAdv = (arr) => {
// //         arr.forEach(item => {
// //             item.remove();
// //         });
// //     };

// //     const makeChanges = () => {
// //         genre.textContent = 'драма';

// //         poster.style.backgroundImage = 'url("img/bg.jpg")';
// //     };

// //     const sortArr = (arr) => {
// //         arr.sort();
// //     };

// //     function createMovieList(films, parent) {
// //         parent.innerHTML = "";
// //         sortArr(films);
    
// //         films.forEach((film, i) => {
// //             parent.innerHTML += `
// //                 <li class="promo__interactive-item">${i + 1} ${film}
// //                     <div class="delete"></div>
// //                 </li>
// //             `;
// //         });

// //         // document.querySelectorAll('.delete').forEach((btn, i) => {
// //         //     btn.addEventListener('click', () => {
// //         //         btn.parentElement.remove();
// //         //         movieDB.movies.splice(i, 1);

// //         //         createMovieList(films, parent);
// //         //     });
// //         // });
// //     }
// //     function deleteElem(arr)

// //     deleteAdv(adv);
// //     makeChanges();
// //     createMovieList(movieDB.movies, movieList);

// // });

// function getCords(elem){
//     let box = elem.getBoundingClientRect();
//     return {
//         top: box.top + window.pageYOffset,
//         left: box.left + window.pageXOffset
//       };
// }

// function positionAt(anchor, position, elem) {

//    let anchorCoords = getCords(anchor);

//     switch (position) {
//         case "top-in":
//             elem.style.left = anchorCoords.left + "px";
//             elem.style.top = anchorCoords.top - elem.clientHeight + "px";
//             break;
//         case "top-out":
//             elem.style.left = anchorCoords.left + "px";
//             elem.style.top = anchorCoords.top + "px";
//             break;

//         case "top":
//             elem.style.left = anchorCoords.left + "px";
//             elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
//             break;

//         case "right":
//             elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
//             elem.style.top = anchorCoords.top + "px";
//             break;

//         case "bottom":
//             elem.style.left = anchorCoords.left + "px";
//             elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
//             break;
//         case "bottom-in":
//             elem.style.left = anchorCoords.left + "px";
//             elem.style.top = anchorCoords.top + anchor.offsetHeight - elem.offsetHeight + "px";
//             break;    
//     }
//     return {

//     }

//   }

//   /**
//    * Показывает заметку с заданным содержимым на заданной позиции
//    * относительно элемента anchor.
//    */
//   function showNote(anchor, position, html) {

//     let note = document.createElement('div');
//     note.className = "note";
//     note.style.position = 'absolute';
//     note.innerHTML = html;
//     document.body.append(note);

//     positionAt(anchor, position, note);
//   }

//   // проверка
//   let blockquote = document.querySelector('blockquote');

//   showNote(blockquote, "top-out", "note above");
//   showNote(blockquote, "top-in", "note above");
//   showNote(blockquote, "right", "note at the right");
//   showNote(blockquote, "bottom", "note below");
//   showNote(blockquote, "bottom-in", "note below1111");


//   btn.addEventListener('click',function(e){
//     e.currentTarget.closest('#btn').hidden = true;
//     console.dir(e.currentTarget.closest('#btn'))
// 
function intersect(arr1, arr2){
    if(arr1.length === 1 && arr2.length === 1){
        if(arr1[0] === arr2[0]){
            return arr1;
        }
    }
arr1.sort((a,b) => a - b);
arr2.sort((a,b) => a - b);
function binarySearch(arr, target){
    let ans = -1;
    let left = 0;
    let right = arr.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right)/2);
        if(arr[mid] < target){
            left = mid + 1;
        }else if(arr[mid] > target){
            right = mid - 1;
        }else{
            arr.splice(1, mid);
            return arr[mid];
        }
    }
    return -1;
}
let res = [];
let min = (arr1.length < arr2.length) ? arr1:
          (arr2.length < arr1.length) ? arr2:arr1;
let max = (arr1.length > arr2.length) ? arr1:
          (arr2.length > arr1.length) ? arr2:arr2;
for(let i = 0; i < min.length; i++){
    let num = binarySearch(max, min[i]);
    if(num !== -1){
        res.push(num);
    }
}
return res;
};
console.log(intersect([4,9,5], [9,4,9,8,4]));
console.log(intersect([2,1], [1,2]));
console.log(intersect([3,1,2], [1,1]));

function twoSum(arr, target){
    let left = 0;
    let right = arr.length - 1;
    let res;
    let re;
    while(left < right){
        // let mid = Math.floor((left + right)/2);
        let num = arr[left] + arr[right];
        // if(num < 0){
        //     right = mid - 1;
        // }
        // if(arr[mid] === num){
        //     left = mid + 1;
        // }
        if(num < target){
            left++;
        }else if(num > target){
            right--;
        }else{
            res = left;
            re = right;
        }
    }
    return res;
};
console.log(twoSum([2,3,4], 6));
console.log(twoSum([2,7,11,15], 9));