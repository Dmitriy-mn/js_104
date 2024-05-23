import "./style.css"

// const BASE_URL = "http://localhost:3001/todos"

// fetch(BASE_URL)
//     .then(response => {
//         if(!response.ok) {
//             throw new Error(response.statusText)
//         }
//         return response.json();
//     })
//     .then((lalala) => console.log(lalala))
//     .catch(error => console.log("catch", error))



// fetch(BASE_URL, {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ title: "Купити хліб", completed: false })
// })
//     .then((data) => {
//         if(!data.ok) {
//             throw new Error(data.status);
//         }
//         return data.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log(error))



// fetch(`${BASE_URL}/b38e`, {
//     method: "PATCH",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ completed: true })
// })
//     .then(res => {
//         if(!res.ok) {
//             throw new Error(res.status);
//         }
//         return res.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log(error))


// fetch(`${BASE_URL}/b38e`, {
//     method: "DELETE"
// })
//     .then(res => {
//         if(!res.ok) {
//             throw new Error("Oooops");
//         }
//         return res.json();
//     })
//     .then(res => {
//         console.log(res);
//     })
//     .catch(error => console.log(error))


const BASE_URL = "http://localhost:3001/todos"

const form = document.querySelector(".todo-form");
const container = document.querySelector(".list");

form.addEventListener("submit", handleSubmit);
container.addEventListener("click", handleUpdate);
container.addEventListener("click", handleDelete);


function fetchData(url = BASE_URL, options = {}) {
    return fetch(url, options)
        .then(response => {
            if(!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
}

fetchData(BASE_URL)
    .then(data => container.insertAdjacentHTML("beforeend", createMarkup(data)))
    .catch(error => console.log(error))

function createMarkup(arr) {
    return arr.map(({ id, title, completed }) => `
        <li class="list__item" data-id="${id}">
            <input type="checkbox" class="list__checkbox" ${completed && "checked"}>
            <h2 class="list__title">${title}</h2>
            <button class="list__btn">X</button>
        </li>
    `).join("");
}

function handleSubmit(event) {
    event.preventDefault();

    const { todo } = event.target.elements;
    
    fetchData(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title: todo.value, completed: false })
    })
        .then(data => container.insertAdjacentHTML("beforeend", createMarkup([data])))
        .catch(error => console.log(error))
        .finally(() => event.target.reset())
}

function handleUpdate(event) {
    if(!event.target.classList.contains("list__checkbox")) {
        return;
    }
    event.preventDefault();

    const parent = event.target.closest(".list__item");
    const id = parent.dataset.id;
    
    fetchData(`${BASE_URL}/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ completed: event.target.checked })
    })
        .then(data => event.target.checked = data.completed)
        .catch(error => console.log(error))
}


function handleDelete(event) {
    if(!event.target.classList.contains("list__btn")) {
        return;
    }

    const parent = event.target.closest(".list__item");
    const id = parent.dataset.id;

    fetchData(`${BASE_URL}/${id}`, {
        method: "DELETE"
    })
        .then(data => parent.remove())
        .catch(error => console.log(error))
}

