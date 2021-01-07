import { RULE_RESULT_STATUSES } from '../Common/Constant';

/**
 * The error structure returned when a network call fails
 */
export default class RuleError extends Error {
  /**
   * Construct a new UnsafeError
   * @param {string} message - an message to return instead of the the default error message
   */
  constructor(message, severiry = RULE_RESULT_STATUSES.WARNING) {
    super(message);
    this.severiry = severiry;
  }
}
