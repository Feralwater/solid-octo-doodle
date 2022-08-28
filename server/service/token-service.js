const jwt = require('jsonwebtoken');
const Token = require('../models/token-model');

class TokenService {
    generateToken(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '15m' });
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '30d' });
        return { accessToken, refreshToken };
    }

    async saveToken(userId, refreshToken) {
        const token = await Token.findOne({ user: userId });
        if (token) {
            token.refreshToken = refreshToken;
            return  token.save();
        }

        await Token.create({ user: userId, refreshToken });
        return token;
    }

    async removeToken(refreshToken) {
        return Token.deleteOne({refreshToken});
    }

    async validateRefreshToken(refreshToken) {
        try {
            return jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
        } catch (e) {
            return null;
        }
    }

    async findToken(refreshToken) {
        return Token.findOne({ refreshToken });
    }
}

module.exports = new TokenService();
