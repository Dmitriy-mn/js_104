
  
/**
 * Напишіть функцію each(array, callback), яка першим параметром очікує масив,
 * а другим - функцію, яка застосовується до кожного елемента масиву. Функція
 * each повинна повернути новий масив, елементами якого будуть
 * результати виклику коллбека.
*/
  

// function each(array, foo) {
//     const newArr = [];
//     for(const item of array) {
//         newArr.push(foo(item))
//     }
//     return newArr;
// }

// console.log(each([64, 49, 25, 16, 4], function(value) {
//     return value * 2;
// }));

// console.log(each([64, 49, 25, 16, 4], function(num) {
//     return num - 10;
// }));

// console.log(each([64, 49, 25, 16, 4], function(num) {
//     return Math.sqrt(num)
// }));




// --------------------------------- 2

/**
 * Стрілочні функції
 * - Оголошення
 * - Явне і неявне поверненя
 * - Псевдомасив arguments (...args)
 * - Інлайн стрілочні функції
 */

// function add(a, b) {
//     return a + b;
// }

// const add = a => a + 50;

// console.log(add(5));



  
/**
 * ---------------------------
*/

// function fnA() {
//     return {
//         a: 5
//     }
// }

// console.log(fnA());


// const fnB = string => ({
//     string
// })

// console.log(fnB("lalala"));


  

// --------------------------------------- 3

/**
 * Метод forEach(callback)
 * - Поелементо перебирає оригінальний масив
 * - Нічого не повертає
 * - Замінює класичний for, якщо не потрібно переривати цикл
 */

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function(number, index) {
//     console.log(`number: ${number} index: ${index}`);
// });

// let total = 0;

// numbers.forEach(item => {
//     total += item;
// })

// console.log(total);




// ------------------------------------------------ 4

/**
 * Array.prototype.map()
 * - Поелементо перебирає оригінальний масив
 * - Не змінює оригінальний масив
 * - Повертає новий масив такої ж довжини
 */

// const allCars = [
//     { make: "Honda", model: "CR-V", amount: 14, price: 24045 },
//     { make: "Honda", model: "Accord", amount: 2, price: 22455 },
//     { make: "Mazda", model: "Mazda 6", amount: 8, price: 24195 },
//     { make: "Mazda", model: "CX-9", amount: 7, price: 31520 },
//     { make: "Toyota", model: "4Runner", amount: 19, price: 34210 },
//     { make: "Toyota", model: "Sequoia", amount: 16, price: 45560 },
//     { make: "Toyota", model: "Tacoma", amount: 4, price: 24320 },
//     { make: "Ford", model: "F-150", amount: 11, price: 27110 },
//     { make: "Ford", model: "Fusion", amount: 13, price: 22120 },
//     { make: "Ford", model: "Explorer", amount: 6, price: 31660 },
// ];
  
/**
 * Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.
 */
  
// const getModels = (cars) => {
//     const res = [];

//     cars.forEach(car => {
//         res.push(car.model);
//     })
//     return res;
// }

// console.log(getModels(allCars))


// const getModels = (cars) => {
//     const res = cars.map((item) => item.model)
//     return res;
// }


// console.log(getModels(allCars))



/**
 * Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним
 * значенням властивості price залежно від переданої знижки.
 */
  
// const makeCarsWithDiscount = (cars, discount) => {
//     return cars.map(car => {
//         return {
//             ...car,
//             price: car.price * (1 - discount)
//         }
//     })
// }

// console.log(makeCarsWithDiscount(allCars, 0.5));





// const players = [
//     { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//     { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//     { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//     { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//     { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];
  
/*
* Збільшуємо кількість годин гравця за id
*/
// const playerIdToUpdate = "player-3";

// const update = (arr, playerId) => {
//     return arr.map((item) => {
//         if(item.id === playerId) {
//             return {
//                 ...item,
//                 timePlayed: item.timePlayed + 70
//             }
//         }
//         return item;
//     })
// }

// console.log(update(players, playerIdToUpdate));
