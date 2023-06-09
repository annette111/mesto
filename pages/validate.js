const globalConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_invalid',
    errorClass: 'popup__error_visible',
}

const cardFormSubmitButtonChangeState = (form, validationConfig) => {
    const button = form.querySelector(validationConfig.submitButtonSelector);
    if (!form.checkValidity()) {
        button.setAttribute('disabled', true);
        button.classList.add(validationConfig.inactiveButtonClass);
        button.classList.remove(validationConfig.submitButtonSelector);
    } else {
        button.removeAttribute('disabled');
        button.classList.add(validationConfig.submitButtonSelector);
        button.classList.remove(validationConfig.inactiveButtonClass);
    }
}

const setErrorMassage = (input) => {
    console.log(input.validity);
}

const getErrorElement = (input) => {
    return document.querySelector(`#${input.name}-error`)
}

const hideInputError = (input, inputErrorClass) => {
    const errorElement = getErrorElement(input);
    errorElement.textContent = '';
    input.classList.remove(inputErrorClass);
}

const showInputError = (input, inputErrorClass) => {
    const errorElement = getErrorElement(input);
    setErrorMassage(input);
    errorElement.textContent = input.validationMessage;
    input.classList.add(inputErrorClass);

}

const validateInput = (input, inputErrorClass) => {
    if (!input.validity.valid) {
        showInputError(input, inputErrorClass);
    } else {
        hideInputError(input, inputErrorClass);
    }

}

function enableValidation(validationConfig) {
    document.querySelectorAll(validationConfig.formSelector).forEach((popupForm) => {
        popupForm.addEventListener('input', (evt) => {
            const input = evt.target;
            const form = evt.currentTarget;
            validateInput(input, validationConfig.inputErrorClass);
            cardFormSubmitButtonChangeState(form, validationConfig, form.checkValidity());
        }, true)
    })
}

enableValidation(globalConfig);