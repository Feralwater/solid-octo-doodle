module.exports = class UserDto {
    email = '';
    userId = '';
    isActivated = false;

    constructor(model) {
        this.email = model.email;
        this.userId = model._id;
        this.password = model.password;
        this.isActivated = model.isActivated;
    }
}
