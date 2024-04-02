// ------------------------------------- 4

/**
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */


// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3
// }

// let total = 0;

// for(const key in feedback) { // const key = "good" 
//     total += feedback[key];
// }

// console.log(total);

// const keys = Object.keys(feedback);

// for(const key of keys) {
//     console.log(feedback[key]);
//     total += feedback[key];
// }
// console.log(total);


// const values = Object.values(feedback);

// for(const value of values) {
//     total += value;
// }

// console.log(total);








// -------------------------------- 5

/**
 * Напиши скрипт, який для об'єкта user, послідовно:
 * - додає поле mood зі значенням 'happy'
 * - замінює значення hobby на 'skydiving'
 * - замінює значення premium на false
 * - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
 */

// const user = {
//     name: "Alice",
//     age: 20,
//     hobby: "html",
//     premium: true
// };

// const user1 = {
//     name: "Kate",
//     age: 30,
//     hobby: "js",
//     premium: true
// };



// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;



// const keys = Object.keys(user);

// for(const key of keys) {
//     console.log(`${key}: ${user[key]}`);
// }

// function foo(obj, hobby) {
//     obj.mood = "happy";
//     obj.hobby = hobby;
//     obj.premium = false;

//     const keys = Object.keys(obj);

//     for(const key of keys) {
//         console.log(`${key}: ${obj[key]}`);
//     }
// }

// foo(user, "skydiving");
// console.log("------------------------");
// foo(user1, "react");







/**
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */

// const salaries = {
//     Kate: 130,
//     Alice: 160,
//     Petya: 100
// }

// function sum(obj) {
//     let sum = 0;
//     const values = Object.values(obj);

//     for(const value of values) {
//         sum += value;
//     }

//     return sum;
// }

// console.log(sum(salaries));








