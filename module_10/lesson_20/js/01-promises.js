/**
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */

// const prom = new Promise((resolve, reject) => {
//     const random = Math.random();

//     setTimeout(() => {
//         if(random > 0.5) {
//             resolve({title: "fulfilled!!!"});
//         } else {
//             reject({title: "rejected!!!"});
//         }
//     }, 1000)

// });

// prom
//     .then((data) => {
//         console.log("then", data);
//     })
//     .catch(({ title }) => {
//         console.log("catch", title);
//     })
//     .finally(() => console.log("finally"))








/**
 * Ланцюги промісів
 * - декілька послідовних then
 * - then повертає проміс
 */


// const lalala = new Promise((resolve, reject) => {
//     resolve(5)
// })

// lalala
//     .then(res => {
//         console.log(res);
//         return res * 2; 
//     })
//     .then(data => {
//         console.log(data);
//         return data + 1;
//     })
//     .then(res => {
//         console.log(res);
//     })
//     .catch(error => {
//         console.log(error);
//     })
//     .finally(() => {})



// const promise = new Promise((resolve) => {
//     resolve(10)
// })


// promise
//     .then(value => {
//         return new Promise((resolve) => {
//             resolve(value * 2)
//         })
//     })
//     .then(value => console.log(value))





// console.log("step 1");

// setTimeout(() => {
//     console.log("step 2");
// }, 0)

// new Promise((resolve) => {
//     resolve("step 3")
// })
//     .then(data => console.log(data))

// new Promise((resolve) => {
//     resolve("step 4")
// })
//     .then(data => console.log(data))

// setTimeout(() => {
//     console.log("step 5");
// })



// setTimeout(() => {
//     console.log("step 1");
// }, 0)


// new Promise(resolve => {
//     resolve("step 2")
// })
//     .then(data => {
//         console.log(data);
//         setTimeout(() => console.log("step 3"), 0)
//     })

// setTimeout(() => {
//     console.log("step 4");
// }, 0)




// setTimeout(() => console.log("step 1"))


// setTimeout(() => {
//     new Promise(resolve => {
//         resolve("step 2")
//     })
//         .then(data => console.log(data))
// })

// new Promise(resolve => {
//     resolve("step 3")
// })
//     .then(data => console.log(data))


// setTimeout(() => console.log("step 4"))