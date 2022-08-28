const userService = require('../service/user-service');

class UserController {
  async signUp(req, res, next) {
      try {
          const { email, password } = req.body;
          const userData = await userService.signUp(email, password);
          res.cookie('refreshToken', userData.refreshToken, {maxAge: 1000 * 60 * 60 * 24 * 30, httpOnly: true});
          return res.json(userData);
      } catch (e) {
        console.log(e);
      }
  }
    async signIn(req, res, next) {
        try {

        } catch (e) {

        }
    }
    async signOut(req, res, next) {
        try {

        } catch (e) {

        }
    }
    async activate(req, res, next) {
        try {
            const { link: activationLink } = req.params;
            await userService.activate(activationLink);
            return res.redirect(process.env.CLIENT_URL);
        } catch (e) {
            console.log(e);
        }
    }
    async refreshToken(req, res, next) {
        try {

        } catch (e) {

        }
    }
    async getUsers(req, res, next) {
        try {
            res.json(['user1', 'user2'])
        } catch (e) {

        }
    }
}

module.exports = new UserController();
