import Popup from './Popup.js';
import { popupImage, popupImageCaption } from '../utils/constants.js';

export default class PopupWithImage extends Popup {
  open(image, caption) {
    super.open();
    popupImage.src = image;
    popupImage.alt = `Изображение ${caption}`;
    popupImageCaption.textContent = caption;
  }
}