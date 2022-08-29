const Router = require("express").Router;
const userController = require("../controllers/user-controller");
const { body } = require("express-validator");

const router = new Router();

router.post('/sign-up',
    body("username").isString().isLength({ min: 2, max: 30 }),
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 chars long'),
    body('phone').isMobilePhone('be-BY').withMessage('Phone is not valid'),
    userController.signUp);
router.post('/sign-in', userController.signIn);
router.post('/sign-out', userController.signOut);
router.get('/activate/:link', userController.activate);
router.get('/refresh-token', userController.refreshToken);

module.exports = router;
