let OpenPopUp = document.querySelector('.edit-button');
let ClosePopUp = document.querySelector('.popup__close');
let PopUp = document.querySelector('.popup');

function ShowPopUp() {
    PopUp.classList.add('popup_opened');
    }



function HidePopUp() {
    PopUp.classList.remove('popup_opened');
    }



OpenPopUp.addEventListener('click', ShowPopUp);
ClosePopUp.addEventListener('click', HidePopUp);
