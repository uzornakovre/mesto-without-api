const popup = document.querySelectorAll('.popup');
const popupEdit = document.querySelector('.popup_type_edit-profile');
const popupPlace = document.querySelector('.popup_type_new-place');
const popupImageViewer = document.querySelector('.popup_type_image');

const buttonEdit = document.querySelector('.profile__button-edit');
const buttonAdd = document.querySelector('.profile__button-add');

const popupImage = popupImageViewer.querySelector('.popup__image');
const popupImageCaption = popupImageViewer.querySelector('.popup__image-caption');

const formEdit = popupEdit.querySelector('#profile_edit');
const formAdd = popupPlace.querySelector('#new_place');

const nameInput = popupEdit.querySelector('.popup__form-input_content_name');
const jobInput = popupEdit.querySelector('.popup__form-input_content_job');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

const placeName = popupPlace.querySelector('.popup__form-input_content_place-name');
const imageUrl = popupPlace.querySelector('.popup__form-input_content_image-url');

const popupBtnCloseEdit = popupEdit.querySelector('#close-edit');
const popupBtnClosePlace = popupPlace.querySelector('#close-place');
const popupBtnCloseImage = popupImageViewer.querySelector('#close-image');

// Модальные окна (открытие)

function openPopup(place) {
  place.classList.add('popup_opened');
}

function openEditPopup() {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

buttonEdit.addEventListener('click', openEditPopup);

function openPlacePopup() {
  openPopup(popupPlace);
}

buttonAdd.addEventListener('click', openPlacePopup);

function openImage(image, caption) {
  openPopup(popupImageViewer);
  popupImage.src = image;
  popupImage.alt = `Изображение ${caption}`;
  popupImageCaption.textContent = caption;
}

// Модальные окна (закрытие)

function closePopup(place) {
  place.classList.remove('popup_opened');
}

popupBtnCloseEdit.addEventListener('click', () => closePopup(popupEdit));
popupEdit.addEventListener('click', evt => {
  if (evt.target === popupEdit) {
    closePopup(popupEdit);
  }
});

popupBtnClosePlace.addEventListener('click', () => closePopup(popupPlace));
popupPlace.addEventListener('click', evt => {
  if (evt.target === popupPlace) {
    closePopup(popupPlace);
  }
});

popupBtnCloseImage.addEventListener('click', () => closePopup(popupImageViewer));
popupImageViewer.addEventListener('click', evt => {
  if (evt.target === popupImageViewer) {
    closePopup(popupImageViewer);
  }
});

document.addEventListener('keydown', evt => {
  if (evt.key === 'Escape') {
    popup.forEach(type => closePopup(type));
  }
});

// Модальные окна (отправка формы)

function submitEditForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
}

formEdit.addEventListener('submit', submitEditForm);

function submitAddForm(evt) {
  evt.preventDefault();
  renderCard(placeName.value, imageUrl.value);
  placeName.value = '';
  imageUrl.value = '';
  closePopup(popupPlace);
}

formAdd.addEventListener('submit', submitAddForm);

// Карточки

const cardTemplate = document.querySelector('#cardTemplate').content;
const cardsContainer = document.querySelector('.elements__list');
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

function createCard(name, link) {
  const cardElement = cardTemplate.querySelector('.elements__list-item').cloneNode(true);
  const cardElementImage = cardElement.querySelector('.element__image');

  const cardDeleteButton = cardElement.querySelector('.elements__button-remove');
  const likeButton = cardElement.querySelector('.element__button-like');

  cardElementImage.src = link;
  cardElementImage.alt = `Изображение ${name}`;
  cardElement.querySelector('.element__title').textContent = name;

  cardElementImage.addEventListener('click', () => openImage(link, name));
  cardDeleteButton.addEventListener('click', () => cardElement.remove());
  likeButton.addEventListener('click', () => likeButton.classList.toggle('element__button-like_active'));

  return cardElement;
}

function renderCard (name, link) {
  const cardElement = createCard(name, link);
  cardsContainer.prepend(cardElement);
}

initialCards.forEach((item) => renderCard(item.name, item.link));