import {_slideUp, _slideToggle, _slideDown} from "./../blocks/slide/slide.js";
import {deactivateMenu} from "./../blocks/menu/__deactivate/deactivateMenu.js";
import {
    headerContainer,
    menuContainer,
    menuList,
    headerButton,
    header,
    menuBody,
    menuButton,
    width,
    phoneInput,
    changeButton,
    mainForm
} from "./../blocks/elements/elements.js"
import {onPhoneInput, onPhoneKeyDown, onPhonePaste} from "./../blocks/validate/validate.js";
import {changeDataPassword, changeInputs, changeButtonInput} from "./../blocks/change/change.js";

let fromGreater = true;

const checkStartWidth = () => {
    if (width < 991.98) {
        fromGreater = false;
        menuList.append(headerButton);
        header.append(menuBody);
        _slideUp(menuBody, 0);
    }
}

checkStartWidth();

window.addEventListener("resize", () => {
    const width = window.screen.width;
    if (width < 992) {
        menuList.append(headerButton);
        header.append(menuBody);
        if (fromGreater) {
            deactivateMenu();
            _slideUp(menuBody, 0);
            fromGreater = false;
        }
    } else {
        fromGreater = true;
        deactivateMenu();
        _slideDown(menuBody, 0);
        headerButton.remove();
        menuContainer.append(menuBody);
        headerContainer.append(headerButton);
    }
})

menuButton.addEventListener('click', (e) => {
    _slideToggle(menuBody);
    e.preventDefault();
})

phoneInput.addEventListener("input", onPhoneInput);
phoneInput.addEventListener("keydown", onPhoneKeyDown);
phoneInput.addEventListener("paste", onPhonePaste);

changeButton.addEventListener('click', (e) => {
    e.preventDefault();
    changeDataPassword(mainForm);
    changeInputs(mainForm);
    changeButtonInput();
})