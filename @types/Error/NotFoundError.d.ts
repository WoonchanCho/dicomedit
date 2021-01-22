/**
 * The error structure returned when a request page is not found
 */
export default class NotFoundError extends Error {
    /**
     * Construct a new NotFoundError
     * @param {string} message - an message to return instead of the the default error message
     */
    constructor(message: string);
}
