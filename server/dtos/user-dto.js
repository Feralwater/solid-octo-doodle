module.exports = class UserDto {
    username;
    email;
    phone;
    userId;
    isActivated;

    constructor(model) {
        this.username = model.username;
        this.email = model.email;
        this.userId = model._id;
        this.password = model.password;
        this.phone = model.phone;
        this.isActivated = model.isActivated;
    }
}
