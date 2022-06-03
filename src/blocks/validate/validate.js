function getInputNumbersValue(input) {
    return input.value.replace(/[^\+\d+$]/g, "");
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

    if (["7", "8", "+"].includes(inputNumbersValue[0])) {
        formattedInputValue = "+7 (";

    } else {
        formattedInputValue = "+7 (" + inputNumbersValue;
    }
    if (inputNumbersValue.length > 1) {
        formattedInputValue += inputNumbersValue.substring(2, 5);
    }
    if (inputNumbersValue.length > 4) {
        formattedInputValue += ") ";
    }
    if (inputNumbersValue.length > 5) {
        formattedInputValue += inputNumbersValue.substring(5, 8);
    }
    if (inputNumbersValue.length > 8) {
        formattedInputValue += "-" + inputNumbersValue.substring(8, 10);
    }
    if (inputNumbersValue.length > 10) {
        formattedInputValue += "-" + inputNumbersValue.substring(10, 12);
    }
    input.value = formattedInputValue;
}

function onPhoneKeyDown(e) {
    const input = e.target;
    if (e.key === "Backspace") {
        if (input.value.length === 9) {
            input.value = input.value.substring(0, input.value.length - 2);
        }
        if (input.value.length === 4) {
            input.value = input.value.substring(0, input.value.length - 3);
        }
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