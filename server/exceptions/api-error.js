module.exports = class ApiError extends Error {
  statusCode;

  errors;

  constructor(statusCode, message, errors = []) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
  }

  static Unauthorized() {
    return new ApiError(401, 'User is not authorized');
  }

  static BadRequest(message, errors = []) {
    return new ApiError(400, message, errors);
  }
};
