/**
 * The error structure returned when a network call fails
 */
export default class ParseError extends Error {
    /**
     * Construct a new ParseError
     * @param {string} message - an message to return instead of the the default error message
     */
    constructor(message: string, ast: any);
    ast: any;
}
