//кнопка редактирования профиля
const btnEditProfile = document.querySelector('.profile__info-button');
//кнопка закрытия попапа
const popupCloseButtons = document.querySelectorAll('.popup__close');
//попап редактировать профиль
const popupProfileEdit = document.querySelector('.popup_type_profile');
//форма попапа
const profileForm = document.getElementById('profile-form');
const cardForm = document.getElementById('card-form');
const nameInput = document.querySelector('.popup__input_type_name');
const infoName = document.querySelector('.profile__info-name');
const jobInput = document.querySelector('.popup__input_type_about-self');
const infoSelf = document.querySelector('.profile__info-self');
const elements = document.querySelector('.elements');
//поля ввода в добавлении карточки
const placeInput = document.querySelector('.popup__input_type_place');
const urlInput = document.querySelector('.popup__input_type_url');
const imageCard = document.querySelector('.element__image');
const titleCard = document.querySelector('.element__title');
//форма попап добавить карточку
const popUpAddCard = document.querySelector('.popup_type_card-add');
//кнопка добавления карточки
const btnCardAdd = document.querySelector('.profile__add-button');
const popupPictureOpen = document.querySelector('.popup_type_picture');
const imageCardOpen = document.querySelector('.popup__open-image-foto');
const titleCardOpen = document.querySelector('.popup__open-image-title');
const cardTemplate = document.querySelector('#card-template');
const popups = document.querySelectorAll('.popup');
const popupAddCard = document.querySelector('.popup__add-card');


// слушатель кнопки редактор профиля
btnEditProfile.addEventListener('click', () => {
  nameInput.value = infoName.textContent;
  jobInput.value = infoSelf.textContent;
  showPopUp(popupProfileEdit);
});



//слушатель закрытия попапа 
popupCloseButtons.forEach((button) => {
  button.addEventListener('click', function (event) {
    hidePopUp(event.target.closest('.popup'));
  });
});

//функция открытия попапа
function showPopUp(popUp) {
  popUp.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

//функция закрытия попапа
function hidePopUp(popUp) {
  popUp.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}

function switchLike(event) {
  event.target.classList.toggle('element__button_active');
}
// слушатель кнопки добавить карточку
btnCardAdd.addEventListener('click', () => {
  showPopUp(popUpAddCard);
  cardFormSubmitButtonChangeState(popupAddCard);
});

profileForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(evt) {
  evt.preventDefault();
  infoName.textContent = nameInput.value;
  infoSelf.textContent = jobInput.value;
  hidePopUp(popupProfileEdit);
}



function createCard(card) {

  const cardElement = cardTemplate.content.cloneNode(true);
  const titleCard = cardElement.querySelector('.element__title');
  const buttonDelete = cardElement.querySelector('.element__button-delete');
  const imageCard = cardElement.querySelector('.element__image');
  const btnLike = cardElement.querySelector('.element__button');
  titleCard.textContent = card.name;
  imageCard.addEventListener('click', openPopUpImage);

  function openPopUpImage() {
    imageCardOpen.src = card.link;
    titleCardOpen.textContent = card.name;
    showPopUp(popupPictureOpen);
  }

  imageCard.setAttribute('src', card.link);
  imageCard.setAttribute('alt', card.name);
  btnLike.addEventListener('click', switchLike);
  buttonDelete.addEventListener('click', deleteCard);
  return cardElement;
}

function renderCard(card) {
  const newcard = createCard(card);
  elements.prepend(newcard);
}

initialCards.forEach(renderCard);

//функция удаления

function deleteCard(event) {
  event.target.closest('.element').remove();
}

function cardSubmit(evt) {
  evt.preventDefault();
  const card = {
    name: placeInput.value,
    link: urlInput.value,
  };
  cardForm.reset();
  renderCard(card);
  hidePopUp(popUpAddCard);
}

cardForm.addEventListener('submit', cardSubmit);

function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    popups.forEach((popup) => {
      if (popup.classList.contains('popup_opened')) {
        hidePopUp(popup);
      }
    })
  }
}

popups.forEach((popup) => {
  popup.addEventListener("mousedown", function (evt) {
    if (evt.target.classList.contains("popup_opened") || evt.target.classList.contains("popup__close")) {
      hidePopUp(popup);
    }
  });
});