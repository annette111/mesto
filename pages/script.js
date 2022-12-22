let openPopUp = document.querySelector('.profile__info-button');
let closePopUp = document.querySelector('.popup__close');
let popUp = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let infoName = document.querySelector('.profile__info-name');
let jobInput = document.querySelector('.popup__input_type_about-self');
let infoSelf = document.querySelector('.profile__info-self');


function ShowPopUp() {
    popUp.classList.add('popup_opened');
    nameInput.value = infoName.textContent;
    jobInput.value = infoSelf.textContent;
    }

function HidePopUp() {
    popUp.classList.remove('popup_opened');
    }

function handleFormSubmit(evt) {
    evt.preventDefault(); 
    infoName.textContent = nameInput.value;
    infoSelf.textContent = jobInput.value;
    HidePopUp();
}


openPopUp.addEventListener('click', ShowPopUp);
formElement.addEventListener('submit', handleFormSubmit);
closePopUp.addEventListener('click', HidePopUp);
