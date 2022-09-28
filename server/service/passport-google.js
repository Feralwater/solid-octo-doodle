const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
require('dotenv').config();
const User = require('../models/user-model');

const { GOOGLE_CLIENT_ID } = process.env;
const { GOOGLE_CLIENT_SECRET } = process.env;
const { GOOGLE_CALLBACK_URL } = process.env;

passport.use(
  'google',
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: GOOGLE_CALLBACK_URL,
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, cb) => {
      const defaultUser = {
        email: `${profile.emails[0].value}`,
        googleId: `${profile.id}`,
      };

      try {
        const user = await User.find(
          {
            googleId: profile.id,
            defaults: defaultUser,
          },
          {
            upsert: true,
          },
        );
        cb(null, user);
      } catch (e) {
        console.log('google sign in error', e);
        cb(e, null);
      }
    },
  ),
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findOne({ id }).catch((e) => {
    console.log('deserializeUser error', e);
    done(e, null);
  });
  if (user) {
    done(null, user);
  }
});
