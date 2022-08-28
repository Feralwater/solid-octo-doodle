const User = require('../models/user-model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dto');

class UserService {
    async signUp(email, password) {
        const candidate = await User.findOne({email});
        if (candidate) {
            throw new Error('User with this email already exists');
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4();

        const user = await User.create({ email, password: hashPassword, activationLink});
        await mailService.sendActivationMail(email, `${process.env.APP_URL}/api/activate/${activationLink}`);

        const userDto = new UserDto(user);
        const { accessToken, refreshToken } = tokenService.generateToken({ ...userDto });
        await tokenService.saveToken(userDto.userId, refreshToken);

        return { user: userDto, accessToken, refreshToken };
    }

    async activate(activationLink) {
        const user = await User.findOne({ activationLink });
        if (!user) {
            throw new Error('Activation link is invalid');
        }
        user.isActivated = true;
        await user.save();
    }
}

module.exports = new UserService();
