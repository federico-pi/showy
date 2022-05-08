/**
 * Puts app to sleep for specified amount fo milliseconds
 */
export const sleep = (timeout: number) =>
  new Promise((resolve) => setTimeout(resolve, timeout));
