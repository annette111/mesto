let openPopUp = document.querySelector('.profile__info-button');
let closePopUp = document.querySelector('.popup__close');
let popUp = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let infoName = document.querySelector('.profile__info-name');
let jobInput = document.querySelector('.popup__input_type_about-self');
let infoSelf = document.querySelector('.profile__info-self');
let elements = document.querySelector('.elements');

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

  initialCards.forEach(function (addCards) {
    const cardTemplate = document.querySelector('#card-template').content.cloneNode(true);
    const cardElement = cardTemplate.querySelector('.element');
    const nameCard = cardElement.querySelector('.element__title');
    nameCard.textContent = addCards.name;
    const imageCard = cardElement.querySelector('.element__image');
    imageCard.setAttribute('src', addCards.link);
    elements.prepend(cardElement);
    
  })

function showPopUp() {
    popUp.classList.add('popup_opened');
    nameInput.value = infoName.textContent;
    jobInput.value = infoSelf.textContent;
    }

function hidePopUp() {
    popUp.classList.remove('popup_opened');
    }

function handleFormSubmit(evt) {
    evt.preventDefault(); 
    infoName.textContent = nameInput.value;
    infoSelf.textContent = jobInput.value;
    hidePopUp();
}


openPopUp.addEventListener('click', showPopUp);
formElement.addEventListener('submit', handleFormSubmit);
closePopUp.addEventListener('click', hidePopUp);

