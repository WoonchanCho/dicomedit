/**
 * The error structure returned when a network call fails
 */
export default class DicomWriteError extends Error {
    /**
     * Construct a new DicomWriteError
     * @param {string} message - an message to return instead of the the default error message
     */
    constructor(message: string, error: any);
    error: any;
}
