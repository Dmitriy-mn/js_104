const PRODUCT_LS = "basket";

const container = document.querySelector(".js-list");
const totalPrice =document.querySelector(".js-total-price");
const clear = document.querySelector(".js-clear");

const products = JSON.parse(localStorage.getItem(PRODUCT_LS)) || [];
let totalCost;

if(products.length) {
    clear.hidden = false;
    totalCost = products.reduce((acc, { qty, price }) => acc += qty * price, 0);
}

totalPrice.textContent = totalCost ? `Загальна вартість ${totalCost} грн` : "Кошик породній";
container.insertAdjacentHTML("beforeend", createMarkup(products));
clear.addEventListener("click", handleClear);

function createMarkup(arr) {
    return arr.map(({ img, name, price, qty }) => `
        <li class="cart-item">
            <img src="${img}" alt="${name}" class="product-img">
            <h2>${name}</h2>
            <p>Кількість: ${qty}</p>
            <p>Загальна вартість: ${qty * price} грн</p>
        </li>
    `).join("")
}

function handleClear() {
    localStorage.removeItem(PRODUCT_LS);
    window.location.href = "./03-shop.html";
}

