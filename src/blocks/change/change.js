import {changeButton} from "./../elements/elements.js";

function changeDataPassword(form) {
    form.dataset.password = (form.dataset.password === "1") ? "0" : "1";
}

function changeInputs(form) {
    const changeInput = form.querySelector("[data-change]");
    changeInput.placeholder = (changeInput.placeholder === "Пароль") ? "Имя и фамилия ученика" : "Пароль";
    changeInput.type = (changeInput.type === "password") ? "text" : "password";
    changeInput.pattern = (changeInput.pattern === "^(?=.{1,40}$)[а-яёА-ЯЁ]+(?:[-' ][а-яёА-ЯЁ]+)*$") ?
        "^[\w~'`!@#№?$%^&*()=+<>|/\\.,:;\[\]{} \x22-]{6,25}$" :
        "^(?=.{1,40}$)[а-яёА-ЯЁ]+(?:[-' ][а-яёА-ЯЁ]+)*$";
    changeInput.value = "";
}

function changeButtonInput() {
    changeButton.textContent = (changeButton.textContent === "Я забыл пароль") ? "Я вспомнил пароль" : "Я забыл пароль";
}

export {changeDataPassword, changeInputs, changeButtonInput};