const { validationResult } = require('express-validator');
const userService = require('../service/user-service');
const ApiError = require('../exceptions/api-error');

class UserController {
  async signUp(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Validation error', errors.array()));
      }
      const {
        username, email, password, googleToken,
      } = req.body;
      const userData = googleToken
        ? await userService.googleSignUp(googleToken)
        : await userService.signUp(username, email, password);
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 1000 * 60 * 60 * 24 * 30, httpOnly: true });
      return res.json(userData);
    } catch (e) {
      return next(e);
    }
  }

  async signIn(req, res, next) {
    try {
      const { email, password, googleToken } = req.body;
      const userData = googleToken
        ? await userService.googleSignIn(googleToken)
        : await userService.signIn(email, password);
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 1000 * 60 * 60 * 24 * 30, httpOnly: true });
      return res.json(userData);
    } catch (e) {
      return next(e);
    }
  }

  async signOut(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const token = await userService.signOut(refreshToken);
      res.clearCookie('refreshToken');
      return res.json(token);
    } catch (e) {
      return next(e);
    }
  }

  async activate(req, res, next) {
    try {
      const { link: activationLink } = req.params;
      await userService.activate(activationLink);
      return res.redirect(process.env.CLIENT_URL);
    } catch (e) {
      return next(e);
    }
  }

  async refreshToken(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await userService.refresh(refreshToken);
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 1000 * 60 * 60 * 24 * 30, httpOnly: true });
      return res.json(userData);
    } catch (e) {
      return next(e);
    }
  }
}

module.exports = new UserController();
