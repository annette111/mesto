//кнопка редактирования профиля
let openPopUp = document.querySelector('.profile__info-button');
//кнопка закрытия попапа
let closePopUp = document.querySelectorAll('.popup__close');
//попап
let popUp = document.querySelector('.popup');
//попап редактировать профиль
let editFormPopUp = document.querySelector('.popup__edit-form')
//форма попапа
let formElement = document.querySelector('.popup__form');
//поля ввода в профиле
let nameInput = document.querySelector('.popup__input_type_name');
let infoName = document.querySelector('.profile__info-name');
let jobInput = document.querySelector('.popup__input_type_about-self');
let infoSelf = document.querySelector('.profile__info-self');
let elements = document.querySelector('.elements');
//поля ввода в добавлении карточки
let placeInput = document.querySelector('.popup__input_type_place')
let urlInput = document.querySelector('.popup__input_type_url')
//попап добавить карточку
let addCardPopUp = document.querySelector('.popup__add-card')
//кнопка добавления карточки
let openAddPopUp = document.querySelector('.profile__add-button')

// слушатель кнопки редактор профиля
openPopUp.addEventListener('click', () => {
  nameInput.value = infoName.textContent;
  jobInput.value = infoSelf.textContent;
  showPopUp(editFormPopUp);
});

// слушатель кнопки добавить карточку
openAddPopUp.addEventListener('click', () => {
  // placeInput.value = '';
  //urlInput.value = '';
  showPopUp(addCardPopUp);
});

//слушатель закрытия попапа 
closePopUp.forEach((button) => {
  button.addEventListener('click', function (event) {
    hidePopUp(event.target.closest('.popup'));
  });
});

function showPopUp(popUp) {
  popUp.classList.add('popup_opened');
}

function hidePopUp(popUp) {
  popUp.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  infoName.textContent = nameInput.value;
  infoSelf.textContent = jobInput.value;
  hidePopUp();
}

formElement.addEventListener('submit', handleFormSubmit);

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