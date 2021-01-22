/**
 * The error structure returned when a network call fails
 */
export default class LexicalError extends Error {
    /**
     * Construct a new LexicalError
     * @param {string} message - an message to return instead of the the default error message
     */
    constructor(message: string, child: any, tracer: any);
    child: any;
    tracer: any;
}
