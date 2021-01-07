/**
 * The error structure returned when a network call fails
 */
export default class LexicalError extends Error {
  /**
   * Construct a new LexicalError
   * @param {string} message - an message to return instead of the the default error message
   */
  constructor(message, child, tracer) {
    super(message);
    this.child = child;
    this.tracer = tracer;
  }
}
