// -------------------------------------- 2

// const book = {
//     title: "React",
//     showThis() {
//         console.log(this);
//     },
//     showTitle() {
//         console.log(this.title);
//     }
// }

// book.showThis();

// const fooThis = book.showThis;
// fooThis();

// const fooTitle = book.showTitle;
// fooTitle();






/**
 * -------------------------
 */

  
/**
 * Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і
 * розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та
 * кількістю з властивості stones.
 */


// const chopShop = {
//     stones: [
//       { name: "Emerald", price: 1300, quantity: 4 },
//       { name: "Diamond", price: 2700, quantity: 3 },
//       { name: "Sapphire", price: 1400, quantity: 7 },
//       { name: "Ruby", price: 800, quantity: 2 },
//     ],
//     calcTotalPrice(stoneName) {
//         const stone = this.stones.find((item) => item.name.toLowerCase() === stoneName.toLowerCase());
//         if(!stone) {
//             return `${stoneName} not found`;
//         }
//         return stone.price * stone.quantity;
//     }
// };

// console.log(chopShop.calcTotalPrice("sapphire"));



/**
 * -------------------------------
 */

// function changeColor(newColor) {
//     console.log("this", this);
//     this.color = newColor;
// }

// const hat = {
//     color: "black",
//     name: "hat"
// }

// const sweater = {
//     color: "green",
//     name: "sweater"
// }

// changeColor.call(hat, "yellow");
// console.log(hat);

// changeColor.apply(sweater, ["red"]);
// console.log(sweater);

// const changeHatColor = changeColor.bind(hat);
// changeHatColor("red");

// console.log(hat);




/**
 * -------------------------------
 */

// const counter = {
//     value: 0,
//     increment(num) {
//         console.log("this", this);
//         this.value += num;
//     },
//     decrement(num) {
//         console.log("this", this);
//         this.value -= num;
//     }
// }

// function foo(num, callback) {
//     callback(num);
// }

// foo(10, counter.increment.bind(counter));
// foo(2, counter.decrement.bind(counter));

// console.log(counter);



// Наше завдання написати програмне забезпечення для автомобіля, а саме натискання кнопки набору та зниження швидкості в системі круїз контролю.
// Створити об'єкт cruiseСontrol з методами accelerate та decrease, властивостями speed та brand.

// const cruiseСontrol = {
//     speed: 0,
//     brand: "Audi",
//     accelerate() {
//         this.speed += 10;
//         console.log(`Автомобіль ${this.brand} прискорився. швидкість ${this.speed}`);
//     },
//     decrease() {
//         if(this.speed <= 0) {
//             console.log("Авто зупинилось");
//             return;
//         }
//         this.speed -= 10;
//         console.log(`Автомобіль ${this.brand} гальмує. швидкість ${this.speed}`);
//     }
// }

// cruiseСontrol.accelerate();
// cruiseСontrol.accelerate();
// cruiseСontrol.decrease();
// cruiseСontrol.decrease();
// cruiseСontrol.decrease();

// console.log(cruiseСontrol);




// Потрібно створити функціонал для контролю швидкості прокатних авто.
// Створіть функцію яка буде приймати 1 параметр (максимально дозволену швидкість)
// та виводити повідомлення, чи ми рухаємось з безпечною швидкістю чи перевищуємо, функція має опрацьовувати об'єкт автомобіля як this


// const SPEED = 60;

// const bmw = {
//     brand: "BMW",
//     speed: 30
// }

// const audi = {
//     brand: "Audi",
//     speed: 70
// }

// function speedSensor(maxSpeed) {
//     if(this.speed <= maxSpeed) {
//         return `Автомобіль ${this.brand} рухається з безпечною швидкістю`;
//     }
//     return `Авто ${this.brand} перевищує`;
// }


// console.log(speedSensor.call(bmw, SPEED));
// console.log(speedSensor.apply(audi, [SPEED]));

