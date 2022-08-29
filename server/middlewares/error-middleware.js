const ApiError = require('../exceptions/api-error');

module.exports = function handleErrors(err, req, res) {
  if (err instanceof ApiError) {
    res.status(err.statusCode).json({
      message: err.message,
      errors: err.errors,
    });
  }
  return res.status(500).json({
    message: 'Internal server error',
  });
};
