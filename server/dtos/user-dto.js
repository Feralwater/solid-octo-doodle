module.exports = class UserDto {
  username;

  email;

  userId;

  isActivated;

  constructor(model) {
    this.username = model.username;
    this.email = model.email;
    this.userId = model._id;
    this.password = model.password;
    this.isActivated = model.isActivated;
  }
};
