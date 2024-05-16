/*
 * Промісифікація:
 * - Проблема доступу до результату проміса з колбеком
 * - Функція, яка повертає проміс
 */

// const makeOrder = (dish, onSuccess, onError) => {
//   const random = Math.random();

//   setTimeout(() => {
//     if(random > 0.5) {
//       onSuccess(`Ваше замовлення ${dish}`);
//     } else {
//       onError("Товар закінчився");
//     }
//   }, 1000)
// }

// makeOrder(
//   "Пиріжок",
//   (str) => console.log(str),
//   (error) => console.log(error)
// )


// const makeOrder = (dish) => {
//   return new Promise((resolve, reject) => {
//     const random = Math.random();

//     setTimeout(() => {
//       if(random > 0.5) {
//         resolve(`Ваше замовлення ${dish}`)
//       } else {
//         reject("Товар закінчився")
//       }
//     },1000)
//   })
// }

// makeOrder("Пиріжок")
//   .then(data => console.log(data))
//   .catch(error => console.log(error))




  
/*
  * Промісифікація «синхронних» функцій
  * - Promise.resolve()
  * - Promise.reject()
  */


// const makeOrder = (dish, onSuccess, onError) => {
//   const random = Math.random();

//     if(random > 0.5) {
//       onSuccess(`Ваше замовлення ${dish}`);
//     } else {
//       onError("Товар закінчився");
//     }
// }


// makeOrder(
//   "Пиріжок",
//   (str) => console.log(str),
//   (error) => console.log(error)
// )


// const makeOrder = (dish) => {
//   const random = Math.random();

//   if(random > 0.5) {
//     return Promise.resolve(`Ваше замовлення ${dish}`);
//   } else {
//     return Promise.reject("Товар закінчився");
//   }
// }

// const makeOrder = (dish) => {
//   return new Promise((resolve, reject) => {
//     const random = Math.random();

//       if(random > 0.5) {
//         resolve(`Ваше замовлення ${dish}`)
//       } else {
//         reject("Товар закінчився")
//       }
//   })
// }


// makeOrder("Пиріжок")
//   .then(res => console.log(res))
//   .catch(error => console.log(error))



  // ------------------- Promise.all Promise.race


// const date1 = Date.now();

// const res1 = () => {
//   return new  Promise((resolve, reject) => {
//     setTimeout(() => {
//       const date2 = Date.now();
//       const delta = date2 - date1;

//       // resolve({ title: "first", time: delta })
//       reject("error lalala")
//     }, 2000)
//   })
// }

// const res2 = () => {
//   return new  Promise((resolve, reject) => {
//     setTimeout(() => {
//       const date2 = Date.now();
//       const delta = date2 - date1;

//       resolve({ title: "second", time: delta })
      
//     }, 1000)
//   })
// }

// const res3 = () => {
//   return new  Promise((resolve, reject) => {
//     setTimeout(() => {
//       const date2 = Date.now();
//       const delta = date2 - date1;

//       resolve({ title: "third", time: delta })
//     }, 1500)
//   })
// }




// Promise.all([res1(), res2(), res3()])
//   .then(lalala => console.log(lalala))
//   .catch(error => console.log("catch", error))


// Promise.race([res1(), res2(), res3()])
//   .then(lalala => console.log(lalala))
//   .catch(error => console.log(error))