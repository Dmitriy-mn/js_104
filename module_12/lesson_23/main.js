import axios from "axios";

import './style.css'

// const BASE_URL = "http://localhost:3001/todos";

// async function getTodos() {
//     const todo1 = await axios(`${BASE_URL}/1`);
//     const todo2 = await axios(`${BASE_URL}/2`);
//     const todo3 = await axios(`${BASE_URL}/3`);

//     return [todo1, todo2, todo3]
// }

// getTodos()
//     .then(data => console.log(data))
//     .catch(error => console.log(error))



// async function getTodos() {
//     const todosArr = [1, 2, 3];

//     const todosProm = todosArr.map(async (id) => {
//         const result = await axios(`${BASE_URL}/${id}`);
//         return result.data;
//     })
    
//     const result = await Promise.all(todosProm);
//     return result
// }

// getTodos()
//     .then(data => console.log(data))
//     .catch(err => console.log(err))





// ----------------------------

// const BASE_URL = "http://localhost:3001/todos";

// const selectors = {
//     form: document.querySelector(".todo__form"),
//     container: document.querySelector(".list")
// }

// selectors.form.addEventListener("submit", handleSubmit);
// selectors.container.addEventListener("click", handleUpdate);
// selectors.container.addEventListener("click", handleDelete);


// async function serviceTodos(url = BASE_URL, options = {}) {
//     const response = await axios(url, options);

//     return response.data;
// }

// function createMarkup(arr) {
//     return arr.map(({ id, title, completed }) => `
//         <li class="list__item" data-id="${id}">
//             <input type="checkbox" class="list__checkbox" ${completed && "checked"}>
//             <h2 class="list__title">${title}</h2>
//             <button class="list__btn">X</button>
//         </li>
//     `).join("")
// }

// serviceTodos()
//     .then(data => selectors.container.insertAdjacentHTML("beforeend", createMarkup(data)))
//     .catch(error => alert(error.message))


// async function handleSubmit(event) {
//     event.preventDefault();

//     const { todo } = event.target.elements;

//     if(!todo.value.trim()) {
//         return;
//     }

//     try {
//         const data = await serviceTodos(BASE_URL, {
//             method: "POST",
//             data: {
//                 title: todo.value,
//                 completed: false
//             }
//         })

//         selectors.container.insertAdjacentHTML("beforeend", createMarkup([data]))
//     } catch(error) {
//         alert(error.message)
//     } finally {
//         selectors.form.reset()
//     }
// }

// async function handleUpdate(event) {
//     if(!event.target.classList.contains("list__checkbox")) {
//         return; 
//     }

//     event.preventDefault();

//     const parent = event.target.closest(".list__item");
//     const id = parent.dataset.id;

//     try {
//         const data = await serviceTodos(`${BASE_URL}/${id}`, {
//             method: "PATCH",
//             data: {
//                 completed: event.target.checked
//             }
//         })

//         event.target.checked = data.completed
//     } catch(err) {
//         alert(err.message)
//     }
// }

// async function handleDelete(event) {
//     if(!event.target.classList.contains("list__btn")) {
//         return;
//     }

//     const parent = event.target.closest(".list__item");
//     const id = parent.dataset.id;

//     try {
//         await serviceTodos(`${BASE_URL}/${id}`, {
//             method: "DELETE"
//         })

//         parent.remove();
//     } catch(err) {
//         alert(err.message)
//     }
// }


