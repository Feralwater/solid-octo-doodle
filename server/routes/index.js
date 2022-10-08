const { Router } = require('express');
const { body } = require('express-validator');
const userController = require('../controllers/user-controller');

const router = new Router();

router.post(
  '/sign-up',
  body('username').isString().isLength({ min: 2, max: 30 }),
  body('email').isEmail().withMessage('Email is not valid'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 chars long'),
  userController.signUp,
);
router.post(
  '/google/sign-up',
  body('googleToken').isString().withMessage('Google token is not valid'),
  userController.signUp,
);
router.post('/sign-in', userController.signIn);
router.post('/sign-out', userController.signOut);
router.get('/activate/:link', userController.activate);
router.get('/refresh-token', userController.refreshToken);

module.exports = router;
