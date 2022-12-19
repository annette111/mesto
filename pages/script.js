let OpenPopUp = document.querySelector('.edit-button');
let ClosePopUp = document.querySelector('.popup__close');
let PopUp = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__name');
let Name = document.querySelector('.name');
let jobInput = document.querySelector('.popup__about-self');
let Self = document.querySelector('.about-self');


function ShowPopUp() {
    PopUp.classList.add('popup_opened');
    nameInput.value = Name.textContent;
    jobInput.value = Self.textContent;
    }

function HidePopUp() {
    PopUp.classList.remove('popup_opened');
    }

function handleFormSubmit(evt) {
    evt.preventDefault(); 
    Name.textContent = nameInput.value;
    Self.textContent = jobInput.value;
    HidePopUp();
}


OpenPopUp.addEventListener('click', ShowPopUp);
formElement.addEventListener('submit', handleFormSubmit);
ClosePopUp.addEventListener('click', HidePopUp);
