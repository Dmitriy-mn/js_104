// -------------------------------------- 1

/**
 * Класи
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
*/

// class Car {
//     #price;

//     static qty = 0;

//     static increment() {
//         Car.qty += 1;
//     }

//     constructor(param) {
//         this.brand = param.brand;
//         this.model = param.model;
//         this.#price = param.price;
//         Car.increment();
//     }

//     getBrand() {
//         return this.brand;
//     }

//     get price() {
//         return this.#price;
//     }

//     set price(newPrice) {
//         // if(typeof newPrice !== "number") {
//         //     console.log("Not a number");
//         //     return;
//         // }
//         // this.#price = newPrice;

//         if(this.#checkType(newPrice, "number")) {
//             this.#price = newPrice;
//             return;
//         }
//         console.log("Not a number");
//     }

//     #checkType(data, type) {
//         if(typeof data !== type) {
//             return false;
//         }
//         return true;
//     }
// }

// const audi = new Car({ brand: "audi", model: "q7", price: 50000 });
// const bmw = new Car({ brand: "audi", model: "q7", price: 55000 });
// const honda = new Car({ brand: "audi", model: "q7", price: 40000 });

// audi.price = "70000";

// console.log(Car.qty);

// console.log("audi", audi);



// --------------------------------------- 2

/**
 * Наслідування класів
 *
 *  - extends
 *  - Конструктор дочірнього класу (super)
 *  - Методи дочірнього класу
*/

// class Hero {
    // constructor(params) {
    //     this.name = params.name;
    //     this.xp = params.xp;

//     gainXp(amount) {
//         console.log(`${this.name} received ${amount} xp`);
//         this.xp += amount;
//     }
// }


// class Warrior extends Hero {
//     constructor({ name, xp, weapon }) {
//         super({ name, xp })
//         this.weapon = weapon;
//     }

//     attack() {
//         console.log(`${this.name} attacks`);
//     }
// }

// const arthas = new Warrior({ name: "Arthos", xp: 1000, weapon: "sword" })

// arthas.gainXp(200);
// arthas.attack();
// console.log(arthas);

// class Mage extends Hero {
//     constructor(params) {
//         super({
//             name: params.name,
//             xp: params.xp
//         });
//         this.spell = params.spell;
//     }

//     cast() {
//         console.log(`${this.name} is castind spell ${this.spell}`);
//     }
// }

// const khadgar = new Mage({ name: "Khadger", xp: 500, spell: "fireball" })


// khadgar.gainXp(100);
// khadgar.cast()
// console.log(khadgar);


// ------------------------------------------------- 4

/**
 * Напиши клас User який створює об'єкт із властивостями login та email.
 * Оголоси приватні властивості #login та #email, доступ до яких зроби через
 * гетер та сетер login та email.
 */


// class User {
//     #login;
//     #email;

//     constructor(params) {
//         this.#login = params.login;
//         this.#email = params.email;
//     }

//     get login() {
//         return this.#login;
//     }

//     set login(newLogin) {
//         this.#login = newLogin;
//     }

//     get email() {
//         return this.#email;
//     }

//     set email(newEmail) {
//         if(newEmail.length) {
//             this.#email = newEmail;
//             return
//         }
//     }
// }


// const alice = new User({
//     login: "Alcie",
//     email: "alice@gmail.com"
// })

// console.log(alice.email);
// alice.email = "lalal@gmailc.om"

// console.log(alice.login);
// alice.login = "Super_Alice"

// console.log(alice);




