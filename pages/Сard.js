import { showPopUp, imageCardOpen, titleCardOpen, popupPictureOpen } from './script.js';

class Card {
    constructor({ name, link }) {
        this._name = name;
        this._link = link;
    }
    _getTemplate() {
        const card = document.querySelector('#card-template')
            .content.querySelector('.element').cloneNode(true);
        return card;
    }

    _setData() {
        const titleCard = this._newCard.querySelector('.element__title');
        titleCard.textContent = this._name;
        const imageCard = this._newCard.querySelector('.element__image');
        imageCard.src = this._link;
    }
    _deleteCard() {
        this._newCard.remove();
        this._newCard = null;
    }

    _switchLike() {
        this._newCard.querySelector('.element__button').classList.toggle('element__button_active');
    }

    _setEventListener() {
        const buttonDelete = this._newCard.querySelector('.element__button-delete');
        buttonDelete.addEventListener('click', () => this._deleteCard());
        const btnLike = this._newCard.querySelector('.element__button');
        btnLike.addEventListener('click', () => this._switchLike());
        popupPictureOpen.addEventListener('click', () => showPopUp())
    }
    _openPopUpImage() {
        imageCardOpen.src = this._link;
        titleCardOpen.textContent = this._name;
    }


    getView() {
        this._newCard = this._getTemplate()
        this._setData();
        this._setEventListener();

        return this._newCard
    }
}

export default Card;