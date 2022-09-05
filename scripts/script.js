const buttonEdit = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const popupContainer = popup.querySelector('.popup__container');
const nameInput = popup.querySelector('.popup__form-input_content_name')
const jobInput = popup.querySelector('.popup__form-input_content_job')
const submitInput = popup.querySelector('.popup__form-submit');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

function openEditPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closeEditPopup() {
  popup.classList.remove('popup_opened');
}

buttonEdit.addEventListener('click', openEditPopup);
popupClose.addEventListener('click', closeEditPopup);

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closeEditPopup();
}

popupContainer.addEventListener('submit', formSubmitHandler);