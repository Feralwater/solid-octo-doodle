const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;

require('./service/passport-google');
require('./models/user-model');

const passport = require('passport');
const User = require('./models/user-model');
// const middlewares = require('./middlewares');
const api = require('./api');
// const errorMiddleware = require('./middlewares/error-middleware');

const index = express();

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    index.listen(PORT, () => {
      console.log(`Server started on PORT ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();

index.use(bodyParser.urlencoded({ extended: true }));
index.use(bodyParser.json());

index.use(morgan('dev'));
index.use(helmet());
index.use(cors({ origin: 'http://localhost:3000', credentials: true }));
index.use(express.json());

index.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  }),
);

index.use(passport.initialize());
index.use(passport.session());

index.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

index.use('/api/v1', api);

// index.use(middlewares.notFound);
// index.use(middlewares.errorHandler);
// index.use(errorMiddleware);

module.exports = index;
