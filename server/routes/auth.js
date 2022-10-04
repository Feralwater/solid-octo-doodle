const router = require('express').Router();

const { FRONTEND_URL } = process.env;

router.get('/sign-in/success', (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: 'successfully',
      user: req.user,
    });
  }
});

router.get('/sign-in/failed', (req, res) => {
  res.status(401).json({
    success: false,
    message: 'failure',
  });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect(FRONTEND_URL);
});

module.exports = router;
