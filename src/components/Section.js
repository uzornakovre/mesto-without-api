export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items,
    this._renderer = renderer,
    this._container = containerSelector;
  }

  renderItems(cardElement) {
    if (cardElement === undefined) {
      this._items.forEach(item => this._renderer(item));
    } else {
      this._renderer(cardElement);
    }
  }

  addItem(cardElement) {
    this._container.prepend(cardElement);
  }
}