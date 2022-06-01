function getInputNumbersValue(input) {
    return input.value.replace(/[^0-9]/g, "");
}

function onPhoneInput(e) {
    const input = e.target;
    let inputNumbersValue = getInputNumbersValue(input);
    let formattedInputValue = "";
    let selectionStart = input.selectionStart;

    if (!inputNumbersValue) {
        return input.value = "";
    }

    if (input.value.length !== selectionStart) {
        if (e.data && /\D/g.test(e.data)) {
            input.value = inputNumbersValue;
        }
        return;
    }

    if (["7", "8", "8"].includes(inputNumbersValue[0])) {
        if (inputNumbersValue[0] === "9") {
            inputNumbersValue = "7" + inputNumbersValue;
        }
        let firstSymbols = (inputNumbersValue[0] === "8") ? "8" : "+7";
        formattedInputValue = firstSymbols + " ";
        if (inputNumbersValue.length > 1) {
            formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
        }
        if (inputNumbersValue.length >= 5) {
            formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
        }
        if (inputNumbersValue.length >= 8) {
            formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
        }
        if (inputNumbersValue.length >= 10) {
            formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
        }
    } else {
        formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
    }
    input.value = formattedInputValue;
}

function onPhoneKeyDown(e) {
    const input = e.target;
    if (e.key === "Backspace" && getInputNumbersValue(input).length === 1) {
        input.value = "";
    }
}

function onPhonePaste(e) {
    let pasted = e.clipboardData;
    const input = e.target;
    let inputNumbersValue = getInputNumbersValue(input);

    if (pasted) {
        let pastedText = pasted.getData("Text");
        if (!/\D/g.test(pastedText)) {
            input.value = inputNumbersValue;
        }
    }
}

export {getInputNumbersValue, onPhoneInput, onPhoneKeyDown, onPhonePaste};