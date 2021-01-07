/**
 * The error structure returned when a authorization failed
 */
export default class AuthorizationError extends Error {
  /**
   * Construct a new AuthorizationError
   * @param {string} message - an message to return instead of the the default error message
   * @param {string} path - the requested path
   * @param {string|object} responseData - responseData
   * @param {Object} response - the object returned by fetch
   */
  constructor(message, path, responseData, response) {
    super(message);
    this.path = path;
    this.responseData = responseData;
    this.response = (response || {}).response || response;
    this.status = response.status;
  }
}
