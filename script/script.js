let buttonEdit = document.querySelector('.profile__button-edit');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');
let popupContainer = popup.querySelector('.popup__container');
let nameInput = popup.querySelector('.popup__form-input_content_name')
let jobInput = popup.querySelector('.popup__form-input_content_job')
let submitInput = popup.querySelector('.popup__form-submit');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

function openEditPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closeEditPopup(evt) {
  evt.preventDefault();
  popup.classList.remove('popup_opened');
}

buttonEdit.addEventListener('click', openEditPopup);
popupClose.addEventListener('click', closeEditPopup);

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popup.classList.remove('popup_opened');
}

popupContainer.addEventListener('submit', formSubmitHandler);