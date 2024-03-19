// -------------------------------------------- 3

/**
 * Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді
 * рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0,
 * то виводь рядок "14 г.", без хвилин.
 */

// const hours = 14;
// const minutes = 20;
// let message;


// if(minutes > 0) {
//     message = `${hours} г. ${minutes} хв.`;
// } else {
//     message = `${hours} г.`;
// }

// const message = minutes > 0 ? `${hours} г. ${minutes} хв.` : `${hours} г.`;

// console.log(message);








/**
 * Напиши скрипт для відображення часу дедлайну здачі проекту. 
 * Використовуй if...else.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

// const deadline = 1;

// if(deadline === 0) {
//     console.log("Today");
// } else if(deadline === 1) {
//     console.log("Tomorrow");
// } else if(deadline === 2) {
//     console.log("Overmorrow");
// } else {
//     console.log("Date in the future");
// }





/**
 * Виконай рефакторинг коду задачі використовуючи switch.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

// const deadline = 1;
// let msg;

// switch(deadline) {
//     case 0:
//         msg = "Today";
//         break;
//     case 1:
//         msg = "Tomorrow";
//         break;
//     case 2:
//         msg = "Overmorrow";
//         break;
//     default:
//         msg = "Date in the future";
// }

// console.log(msg);




/*
 * Напиши скрипт выбора опції доставки товару.
 * Опция зберігається у змінній option: 1 - самовывоз, 2 - курьер, 3 - пошта
 *
 * У змінну message записати повідомлення залежно від опції.
 * - 'Ви зможете забрати товар завтра з 12:00 у нашому офісі'
 * - 'Курьер доставить замовлення завтра з 9:00 до 18:00'
 * - 'Посилка буде відправленна сьогодні'
 * - 'Вам передзвонить менеджер'
 */


// const option = 3;
// let message = "";

// switch(option) {
//     case 1:
//         message = 'Ви зможете забрати товар завтра з 12:00 у нашому офісі';
//         break;
//     case 2:
//         message = 'Курьер доставить замовлення завтра з 9:00 до 18:00';
//         break;
//     case 3:
//         message = 'Посилка буде відправленна сьогодні';
//         break;
//     default:
//         message = 'Вам передзвонить менеджер';
// }

// console.log(message);




/**
 * --------------------------------
 */

// console.log(true && 3);
// console.log(false && 3);

// console.log(true && 4 && "hello");
// console.log(true && 0 && "hello");

// console.log(true || 4);
// console.log(true || 4 || 3);
// console.log(true || false || 3);

// console.log(null || 3 || undefined);

// console.log(null || 2 && 3 || 4);










// -------------------------------------- 6

/*
 * Напиши скрипт перевірки підписки користувача при доступі до контента
 * - Є три типа підписки: free, pro і vip.
 * - Отримати доступ можуть тільки користувачі pro і vip
 */

// const sub = "free";
// let canConnect;
                    
// const canConnect = sub === "pro" || sub === "vip";


// if(sub === "pro" || sub === "vip") {
//     canConnect = true;
// } else {
//     canConnect = false;
// }

// console.log("дозволено доступ?", canConnect);






/*
 * Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
 * Для цього, користувач має бути:
 * - другом
 * - онлайн
 * - без режима не турбувати
 */


// const isOnline = true;
// const isFriend = true;
// const isDnd = true;

// const canChat = isFriend && isOnline && !isDnd;

// console.log("can chat?", canChat);

