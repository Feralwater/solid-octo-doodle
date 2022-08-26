const Router = require("express").Router;
const userController = require("../controllers/user-controller");

const router = new Router();

router.post('/sign-up', userController.signUp);
router.post('/sign-in', userController.signIn);
router.post('/sign-out', userController.signOut);
router.get('/activate/:link', userController.activate);
router.get('/refresh-token', userController.refreshToken);
router.get('/users', userController.getUsers);

module.exports = router;
