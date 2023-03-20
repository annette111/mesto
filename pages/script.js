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
let imageCard = document.querySelector('.element__image')
let nameCard = document.querySelector('.element__title')
//форма попап добавить карточку
let addCardPopUp = document.querySelector('.popup__add-card')
//кнопка добавления карточки
let openAddPopUp = document.querySelector('.profile__add-button')
let openCardPopup = document.querySelector('.popup__open-card');
let imageOpenPopup = document.querySelector('.popup__open-image-foto');
let titleOpenPopup = document.querySelector('.popup__open-image-title');

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

// слушатель кнопки редактор профиля
openPopUp.addEventListener('click', () => {
  nameInput.value = infoName.textContent;
  jobInput.value = infoSelf.textContent;
  showPopUp(editFormPopUp);
});

// слушатель кнопки добавить карточку
openAddPopUp.addEventListener('click', () => {
  showPopUp(addCardPopUp);
});

//слушатель закрытия попапа 
closePopUp.forEach((button) => {
  button.addEventListener('click', function (event) {
    hidePopUp(event.target.closest('.popup'));
  });
});

//функция открытия попапа
function showPopUp(popUp) {
  popUp.classList.add('popup_opened');
};

//функция закрытия попапа
function hidePopUp(popUp) {
  popUp.classList.remove('popup_opened');
};

//функция сохраниния формы
function handleFormSubmit(evt) {
  evt.preventDefault();
  infoName.textContent = nameInput.value;
  infoSelf.textContent = jobInput.value;
  hidePopUp(evt.target.closest('.popup'));
};

formElement.addEventListener('submit', handleFormSubmit);

function newCard(addCard) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const nameCard = cardElement.querySelector('.element__title');
  nameCard.textContent = addCard.name;
  const imageCard = cardElement.querySelector('.element__image');
  imageCard.setAttribute('src', addCard.link);
  cardElement.querySelector('.element__button').addEventListener('click', function (event) {
    event.target.classList.toggle('element__button_active');
  });
  elements.prepend(cardElement);
  //кнопка удаления карточки
  let buttonDelete = document.querySelector('.element__button-delete');
  buttonDelete.addEventListener('click', deleteCard);
  imageCard.addEventListener('click', function openPopUp() {
    imageOpenPopup.src = addCard.link;
    titleOpenPopup.textContent = addCard.name;
    showPopUp(openCardPopup);
  });
  imageCard.setAttribute('src', addCard.link);
  imageCard.setAttribute('alt', addCard.name);
};

initialCards.forEach(newCard);

function cardSubmit(evt) {
  evt.preventDefault();
  const form = evt.target;
  const card = {
    name: placeInput.value,
    link: urlInput.value,
  };
  formElement.reset();
  newCard(card);
  hidePopUp(form.closest('.popup'));
};

addCardPopUp.addEventListener('submit', cardSubmit);

//функция удаления

function deleteCard(event) {
  let buttonDelete = event.target;
  let elementDel = buttonDelete.closest('.element');
  elementDel.remove();
};
