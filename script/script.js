let buttonEdit = document.querySelector('.profile__button-edit');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');
let popupContainer = popup.querySelector('.popup__container');
let nameInput = popup.querySelector('.popup__form-input_content_name')
let jobInput = popup.querySelector('.popup__form-input_content_job')

function popupOn() {
  popup.setAttribute('style', 'display: flex');
}

function popupOff() {
  popup.setAttribute('style', 'display: none');
}

buttonEdit.addEventListener('click', popupOn);
popupClose.addEventListener('click', popupOff);

function formSubmitHandler (evt) {
    evt.preventDefault();
    let profileName = document.querySelector('.profile__name');
    let profileJob = document.querySelector('.profile__job');
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupOff();
}

popupContainer.addEventListener('submit', formSubmitHandler);