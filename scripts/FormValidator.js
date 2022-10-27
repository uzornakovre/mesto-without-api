export class FormValidator {
  constructor(settingsList, formElement) {
    this._settings = settingsList;
    this._formElement = formElement;
  }

  enableValidation() {
      this._setEventListeners();
  }

  _setEventListeners() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._settings.submitButtonSelector);
    this._toggleButtonState();
    this._formElement.addEventListener('submit', evt => evt.preventDefault());
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._settings.inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', true);
    } else {
      this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled')
    }
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _showInputError(inputElement) {
    this._errorElement = this._formElement.querySelector(`.popup__form-input-error_content_${inputElement.id}`);
    this._errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._settings.inputErrorClass);
  }

  _hideInputError(inputElement) {
    this._errorElement = this._formElement.querySelector(`.popup__form-input-error_content_${inputElement.id}`);
    this._errorElement.textContent = "";
    inputElement.classList.remove(this._settings.inputErrorClass);
  }

  resetValidation() {
    this._toggleButtonState;
    this._setEventListeners();
    this._inputList.forEach(inputElement => this._hideInputError(inputElement));
  }
}