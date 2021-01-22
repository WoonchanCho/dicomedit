/**
 * The error structure returned when a request page is not found
 */
export default class BadRequestError extends Error {
    /**
     * Construct a new BadRequestError
     * @param {string} message - an message to return instead of the the default error message
     * @param {string} path - the requested path
     * @param {string|object} responseData - responseData
     * @param {Object} response - the object returned by fetch
     */
    constructor(message: string, path: string, responseData: string | object, response: any);
    path: string;
    responseData: any;
    response: any;
    status: any;
}
