export class Card {
  constructor(item, templateSelector, handleCardClick) {
    this._templateSelector = templateSelector;
    this._name = item.name;
    this._link = item.link;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.elements__list-item')
      .cloneNode(true);

    return cardElement;
  }

  _createCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__image').alt = `Изображение ${this._name}`;
    this._element.querySelector('.element__title').textContent = this._name;

    this._setEventListeners();
    
    return this._element;
  }

  renderCard() {
    const cardElement = this._createCard();
    document.querySelector('.elements__list').prepend(cardElement);
  }

  _setEventListeners() {
    this._cardDeleteButton = this._element.querySelector('.elements__button-remove');
    this._likeButton = this._element.querySelector('.element__button-like');
    this._cardImage = this._element.querySelector('.element__image');

    this._cardDeleteButton.addEventListener('click', () => this._element.remove());
    this._likeButton.addEventListener('click', () => this._likeButton.classList.toggle('element__button-like_active'));
    this._cardImage.addEventListener('click', () => this._handleCardClick(this._link, this._name));
  }
}