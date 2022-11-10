export default class UserInfo {
  constructor({ name, job }) {
    this._nameSelector = name;
    this._jobSelector = job;
  }

  getUserInfo() {
    return {
      name: this._nameSelector.textContent,
      job:  this._jobSelector.textContent
    }
  }

  setUserInfo(data) {
    this._nameSelector.textContent = data.name;
    this._jobSelector.textContent = data.job;
  }
}