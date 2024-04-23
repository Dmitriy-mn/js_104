/*
 * Створюємо та додаємо колекцію
 */
const options = [
    { label: 'червоний', color: '#F44336' },
    { label: 'зелений', color: '#4CAF50' },
    { label: 'синій', color: '#2196F3' },
    { label: 'сірий', color: '#607D8B' },
    { label: 'рожевий', color: '#E91E63' },
    { label: 'індіго', color: '#3F51B5' },
];
  
const colorPickerContainerEl = document.querySelector('.color-picker');

/*
* Пишемо функцію для створення розмітки колорпікера
*/

// const elements = options.map((option) => {
//     const buttonEl = document.createElement("button");
//     buttonEl.classList.add("color-picker__option");
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;

//     return buttonEl;
// })

// colorPickerContainerEl.append(...elements);


const createMarkup = (arr) => {
    return arr.map((item) => {
        const buttonEl = document.createElement("button");
        buttonEl.classList.add("color-picker__option");
        buttonEl.textContent = item.label;
        buttonEl.style.backgroundColor = item.color;

        return buttonEl;
    })
}

colorPickerContainerEl.append(...createMarkup(options))