const userService = require('../service/user-service');
const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/api-error');

class UserController {
  async signUp(req, res, next) {
      try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Validation error', errors.array()));
            }
          const { email, password } = req.body;
          const userData = await userService.signUp(email, password);
          res.cookie('refreshToken', userData.refreshToken, {maxAge: 1000 * 60 * 60 * 24 * 30, httpOnly: true});
          return res.json(userData);
      } catch (e) {
        next(e);
      }
  }
    async signIn(req, res, next) {
        try {
            const { email, password } = req.body;
            const userData = await userService.signIn(email, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 1000 * 60 * 60 * 24 * 30, httpOnly: true});
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }
    async signOut(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            const token = await userService.signOut(refreshToken);
            res.clearCookie('refreshToken');
            return res.json(token);
        } catch (e) {
            next(e);
        }
    }
    async activate(req, res, next) {
        try {
            const { link: activationLink } = req.params;
            await userService.activate(activationLink);
            return res.redirect(process.env.CLIENT_URL);
        } catch (e) {
            next(e);
        }
    }
    async refreshToken(req, res, next) {
        try {

        } catch (e) {
            next(e);
        }
    }
    async getUsers(req, res, next) {
        try {
            res.json(['user1', 'user2'])
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new UserController();
