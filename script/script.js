let buttonEdit = document.querySelector('.profile__button-edit');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');
let popupContainer = popup.querySelector('.popup__container');
let nameInput = popup.querySelector('.popup__form-input_content_name')
let jobInput = popup.querySelector('.popup__form-input_content_job')
let submitInput = popup.querySelector('.popup__form-submit');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

buttonEdit.addEventListener('click', function popupOn() {
  popup.setAttribute('style', 'display: flex');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

popupClose.addEventListener('click', function popupOff(evt) {
  evt.preventDefault();
  popup.setAttribute('style', 'display: none');
});

popupContainer.addEventListener('submit', function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popup.setAttribute('style', 'display: none');
});

nameInput.addEventListener('keypress', function(evt) {
  evt.preventDefault();
  if (evt.keyCode === 13) {
    jobInput.focus();
  }
});

jobInput.addEventListener('keypress', function(evt) {
  evt.preventDefault();
  if (evt.keyCode === 13) {
    submitInput.focus();
  }
});