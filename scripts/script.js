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

// Модальные окна

function openPopup(place) {
  place.classList.add('popup_opened');
}

function closePopup(place) {
  const popupCloseButton = place.querySelector('.popup__close');
  const formSubmit = place.querySelector('.popup__form');

  function closePopupElements() {
    place.classList.remove('popup_opened');
  }

  popupCloseButton.addEventListener('click', closePopupElements);

  if (place.contains(formSubmit)) {
    formSubmit.addEventListener('submit', closePopupElements);
  }
}

function openEditPopup() {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  closePopup(popupEdit);
}

buttonEdit.addEventListener('click', openEditPopup);

function submitEditForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
}

formEdit.addEventListener('submit', submitEditForm);

function openPlacePopup() {
  openPopup(popupPlace);
  closePopup(popupPlace);
}

buttonAdd.addEventListener('click', openPlacePopup);

function submitAddForm(evt) {
  evt.preventDefault();
  createCard(placeName.value, imageUrl.value);
  placeName.value = '';
  imageUrl.value = '';
  closePopup(popupPlace);
}

formAdd.addEventListener('submit', submitAddForm);

function openImage(image, caption) {
  openPopup(popupImageViewer);
  popupImage.src = image;
  popupImage.alt = `Изображение ${caption}`;
  popupImageCaption.textContent = caption;
  closePopup(popupImageViewer);
}

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

initialCards.forEach((item) => {
  createCard(item.name, item.link);
})

function createCard(name, link) {
  const cardElement = cardTemplate.querySelector('.elements__list-item').cloneNode(true);
  const cardElementImage = cardElement.querySelector('.element__image');

  const cardDeleteButton = cardElement.querySelector('.elements__button-remove');
  const likeButton = cardElement.querySelector('.element__button-like');

  cardElementImage.src = link;
  cardElementImage.alt = `Изображение ${name}`;
  cardElement.querySelector('.element__title').textContent = name;

  cardElementImage.addEventListener('click', () => {
    openImage(link, name);
  });

  cardDeleteButton.addEventListener('click', () => {
    const listItem = cardDeleteButton.closest('.elements__list-item');
    listItem.remove();
  });

  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('element__button-like_active');
  });

  renderCard(cardElement);
}

function renderCard (card) {
  cardsContainer.prepend(card);
}