import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const popups = document.querySelectorAll('.popup');
const popupEdit = document.querySelector('.popup_type_edit-profile');
const popupPlace = document.querySelector('.popup_type_new-place');
const popupImageViewer = document.querySelector('.popup_type_image');

const buttonEdit = document.querySelector('.profile__button-edit');
const buttonAdd = document.querySelector('.profile__button-add');

const popupImage = popupImageViewer.querySelector('.popup__image');
const popupImageCaption = popupImageViewer.querySelector('.popup__image-caption');

const formEdit = popupEdit.querySelector('#profile_edit');
const formAdd = popupPlace.querySelector('#new_place');

const buttonSubmitEdit = formEdit.querySelector('.popup__form-submit');
const buttonSubmitPlace = formAdd.querySelector('.popup__form-submit');

const nameInput = popupEdit.querySelector('.popup__form-input_content_name');
const jobInput = popupEdit.querySelector('.popup__form-input_content_job');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

const placeName = popupPlace.querySelector('.popup__form-input_content_place-name');
const imageUrl = popupPlace.querySelector('.popup__form-input_content_image-url');

// Модальные окна (открытие)

function openPopup(place) {
  place.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

function openEditPopup() {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  enableSubmitButton(buttonSubmitEdit);
}

buttonEdit.addEventListener('click', openEditPopup);

function openPlacePopup() {
  openPopup(popupPlace);
  formAdd.reset();
  disableSubmitButton(buttonSubmitPlace);
}

buttonAdd.addEventListener('click', openPlacePopup);

function handleCardClick(image, caption) {
  openPopup(popupImageViewer);
  popupImage.src = image;
  popupImage.alt = `Изображение ${caption}`;
  popupImageCaption.textContent = caption;
}

// Модальные окна (закрытие)

function closePopup(place) {
  place.classList.remove('popup_opened');
  disableErrorStyle();
  document.removeEventListener('keydown', closeByEscape);
}

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    popups.forEach(place => closePopup(place));
  }
}

popups.forEach(popup => {
  popup.addEventListener('mousedown', evt => {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    }
  });
});

// Модальные окна (отправка формы и прочее)

function submitEditForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
}

formEdit.addEventListener('submit', submitEditForm);

function submitAddForm(evt) {
  evt.preventDefault();
  const cardData = {
    name: placeName.value,
    link: imageUrl.value
  }
  new Card(cardData, '#cardTemplate', handleCardClick).renderCard();
  closePopup(popupPlace);
}

formAdd.addEventListener('submit', submitAddForm);

// Доп. функции для корректного отображения форм после закрытия формы без сабмита и повторного открытия

function enableSubmitButton(buttonElement) {
  buttonElement.removeAttribute('disabled');
  buttonElement.classList.remove('popup__form-submit_disabled');
}

function disableSubmitButton(buttonElement) {
  buttonElement.setAttribute('disabled', true);
  buttonElement.classList.add('popup__form-submit_disabled');
}

function disableErrorStyle() {
  const errorMessages = document.querySelectorAll('.popup__form-input-error');
  const inputList = document.querySelectorAll('.popup__form-input');

  errorMessages.forEach(validMessage => validMessage.textContent = "");
  inputList.forEach((inputElement) => inputElement.classList.remove('popup__form-input_error'));
}

// Карточки

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

initialCards.forEach((item) => new Card(item, '#cardTemplate', handleCardClick).renderCard());

// Валидация

const settingsList = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__form-submit',
  inactiveButtonClass: 'popup__form-submit_disabled',
  inputErrorClass: 'popup__form-input_error'
}

const formList = Array.from(document.querySelectorAll(settingsList.formSelector));
formList.forEach((formElement) => new FormValidator(settingsList, formElement).enableValidation());