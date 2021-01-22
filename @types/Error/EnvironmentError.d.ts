export default class EnvironmentError extends Error {
    /**
     * Construct a new UnsafeError
     * @param {string} message - an message to return instead of the the default error message
     */
    constructor(message: string);
}
