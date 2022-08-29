const User = require('../models/user-model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dto');
const ApiError = require('../exceptions/api-error');

class UserService {
    async signUp(username, email, password, phone) {
        const candidate = await User.findOne({email});
        if (candidate) {
            throw ApiError.BadRequest('User with this email already exists');
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4();

        const user = await User.create({ username, email, password: hashPassword, phone, activationLink});
        await mailService.sendActivationMail(email, `${process.env.APP_URL}/api/activate/${activationLink}`);

        const userDto = new UserDto(user);
        const { accessToken, refreshToken } = tokenService.generateToken({ ...userDto });
        await tokenService.saveToken(userDto.userId, refreshToken);

        return { user: userDto, accessToken, refreshToken };
    }

    async activate(activationLink) {
        const user = await User.findOne({ activationLink });
        if (!user) {
            throw ApiError.BadRequest('Activation link is invalid');
        }
        user.isActivated = true;
        await user.save();
    }

    async signIn(email, password) {
        const user = await User.findOne({ email });
        if (!user) {
            throw ApiError.BadRequest('User with this email does not exist');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw ApiError.BadRequest('Invalid password');
        }
        const userDto = new UserDto(user);
        const { accessToken, refreshToken } = tokenService.generateToken({ ...userDto });
        await tokenService.saveToken(userDto.userId, refreshToken);

        return { user: userDto, accessToken, refreshToken };
    }

    async signOut(refreshToken) {
        return await tokenService.removeToken(refreshToken);
    }

    async refresh(refresh) {
        if (!refresh) {
            throw ApiError.Unauthorized();
        }
        const userData = await tokenService.validateRefreshToken(refresh);
        const tokenFromDb = await tokenService.findToken(refresh);
        if (!tokenFromDb || !userData) {
            throw ApiError.Unauthorized();
        }
        const user = await User.findById(userData.userId);
        const userDto = new UserDto(user);
        const { accessToken, refreshToken } = tokenService.generateToken({ ...userDto });
        await tokenService.saveToken(userDto.userId, refreshToken);

        return { user: userDto, accessToken, refreshToken };
    }
}

module.exports = new UserService();
