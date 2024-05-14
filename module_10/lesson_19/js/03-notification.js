/**
 * - Показуємо та ховаємо, додаючи/видаляючи клас is-visible
 * - Ховаємо через певний час
 * - Ховаємо при кліці
 * - Не забуваємо чистити таймер
 */

const notification = document.querySelector(".js-alert");
let timeotId = null;
notification.addEventListener("click", onNotificationClick);

showNotification();

function showNotification() {
    notification.classList.add("is-visible");

    timeotId = setTimeout(() => {
        console.log("hide");
        hideNotification();
    }, 3000);
}

function onNotificationClick() {
    hideNotification();
    clearTimeout(timeotId);
}


function hideNotification() {
    notification.classList.remove("is-visible");
}
