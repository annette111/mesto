const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__button_disabled',
    errorClass: 'popup__error_visible',
}

const cardFormSubmitButtonChangeState = (form) => {
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

const hideInputError = (input) => {
    const errorElement = getErrorElement(input);
    errorElement.textContent = '';
}

const showInputError = (input) => {
    const errorElement = getErrorElement(input);
    setErrorMassage(input);

    errorElement.textContent = input.validationMessage;


}

const validateInput = (input) => {
    if (!input.validity.valid) {
        showInputError(input);
    } else {
        hideInputError(input);
    }

}

function enableValidation() {
    document.querySelectorAll(validationConfig.formSelector).forEach((popupForm) => {
        popupForm.addEventListener('input', (evt) => {
            const input = evt.target;
            const form = evt.currentTarget;
            validateInput(input);
            cardFormSubmitButtonChangeState(form, form.checkValidity());
        }, true)
    })
}

enableValidation();