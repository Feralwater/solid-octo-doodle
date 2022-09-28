const router = require('express').Router();
const passport = require('passport');

const FRONTEND_URL = process.env;

router.get('/login/success', (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: 'successfully',
      user: req.user,
    });
  }
});

router.get('/login/failed', (req, res) => {
  res.status(401).json({
    success: false,
    message: 'failure',
  });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect(FRONTEND_URL);
});

router.get('login/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
  'auth/google/callback',
  passport.authenticate('google', {
    successRedirect: FRONTEND_URL,
    failureRedirect: '/login/failed',
    failureMessage: 'Cannot login with google, please try again',
  }),
  (req, res) => {
    console.log('User:', req.user);
    res.send('Thanks for logging in');
  },
);

module.exports = router;
