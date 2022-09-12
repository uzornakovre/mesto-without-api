const buttonEdit = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const popupContainer = popup.querySelector('.popup__container');
const nameInput = popup.querySelector('.popup__form-input_content_name')
const jobInput = popup.querySelector('.popup__form-input_content_job')
const submitInput = popup.querySelector('.popup__form-submit');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

function openPopup () {
  popup.classList.add('popup_opened');
  popupContainer.classList.add('popup__container_opened');
}

function openEditPopup() {
  openPopup();
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
  popupContainer.classList.remove('popup__container_opened');
}

buttonEdit.addEventListener('click', openEditPopup);
popupClose.addEventListener('click', closePopup);

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup();
}

popupContainer.addEventListener('submit', formSubmitHandler);

const cardTemplate = document.querySelector('#cardTemplate').content;
const elementsList = document.querySelector('.elements__list');
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

initialCards.forEach(function(item) {
  const cardElement = cardTemplate.querySelector('.elements__list-item').cloneNode(true);

  cardElement.querySelector('.element__image').src = item.link;
  cardElement.querySelector('.element__title').textContent = item.name;

  elementsList.append(cardElement);
})

