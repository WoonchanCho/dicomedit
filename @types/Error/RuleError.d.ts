/**
 * The error structure returned when a network call fails
 */
export default class RuleError extends Error {
    /**
     * Construct a new UnsafeError
     * @param {string} message - an message to return instead of the the default error message
     */
    constructor(message: string, severiry?: string);
    severiry: string;
}
